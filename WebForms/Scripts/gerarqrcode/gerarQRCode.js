var GerarQRCode = (function () { var file, folder; try { file = (function () { var scr = document.getElementsByTagName('script'); var file = scr[scr.length - 1].getAttribute("src"); return file; })(); folder = file.substring(0, file.lastIndexOf('/') + 1); } catch (ex) { file = location.pathname; folder = file.substring(0, file.lastIndexOf('/') + 1); } return folder; })();

(function ($) {
    $.fn.GerarQRCode = function (options) {

        var folder = GerarQRCode;
        var settings = $.extend({
            folder: folder,
            template: folder + "templates/",
            urlPreview: "/Ashx/GerarQRCode.ashx?",
            urlDownload: "/Ashx/GerarQRCode.ashx?download=true"
        }, options);
        var guid = (function () { function key() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); } return function () { return key() + key() + '-' + key() + '-' + key() + '-' + key() + '-' + key() + key() + key(); }; })();
        var resizeEvent = function(){
            $('.gerar-qrcode .nav-tabs li a').first().focus().click();
        };
        var loadEvent = function (event) {
            var _base = $(this).attr('gerar-qrcode');
            var _classeBase = '.' + _base;

            $(this).unbind({ 'load': loadEvent, 'error': errorEvent });
            $(_classeBase + ' .preview a').removeClass('disabled');
        };
        var errorEvent = function (event) {
            var _base = $(this).attr('gerar-qrcode');
            var _classeBase = '.' + _base;

            $(this).unbind({ 'load': loadEvent, 'error': errorEvent });
            $(_classeBase + ' .preview a').addClass('disabled');
        };
        var loadTemplate = function (response, status, xhr) {
            var _base = $(this).attr('gerar-qrcode');
            var _classeBase = '.' + _base;

            if (status == "error") {
                $(this).html('<p>Erro ao carregar formulário.</p>')
            } else {
                $(this).find('input, select, textarea').attr('gerar-qrcode', _base).change(changeEvent);
                $(this).find('input:text, textarea').attr('gerar-qrcode', _base).keyup(changeEvent);
            };
        };
        var exchangeTemplateEvent = function (event) {
            var _base = $(this).attr('gerar-qrcode');
            var _classeBase = '.' + _base;

            $(_classeBase + ' .nav-tabs a').first().click();
            $(_classeBase + ' .tab-content fieldset div')
                .first()
                .html('<p>Aguarde...</p>')
                .load($(this).attr('href'), loadTemplate);
            return false;
        };
        var changeEvent = function (event) {
            var _base = $(this).attr('gerar-qrcode');
            var _classeBase = '.' + _base;
            var _formato = $(_classeBase + " form input[name='acao']").val();
            var _valor = $(_classeBase + ' form').serialize();

            _valor = format[_formato]($(_classeBase + ' form'));
            
            var $url = settings.urlPreview + "&timeout=" + (new Date()).getTime() + "&";
            $(_classeBase + ' .preview a').addClass('disabled').attr('href', $url + _valor + "&download=true");
            $(_classeBase + ' .preview img')
                .unbind({ 'load': loadEvent, 'error': errorEvent })
                .PreloadImage({ url: $url + _valor })
                .bind({ 'load': loadEvent, 'error': errorEvent });
            return false;
        };
        var format = {
            url: function (element) {
                return $(element).serialize();
            },
            text: function (element) {
                return $(element).serialize();
            },
            vcard: function (element) {
                var _resultado = "";

                _resultado += "\nBEGIN:VCARD";
                _resultado += "\nVERSION:2.1";
                _resultado += "\nFN:" + $(element).find("input[name='nome']").val() + " " + $(element).find("input[name='sobrenome']").val();
                _resultado += "\nN:" + $(element).find("input[name='sobrenome']").val() + ";" + $(element).find("input[name='nome']").val();
                _resultado += "\nTITLE:" + $(element).find("input[name='cargo']").val();
                _resultado += "\nTEL;CELL:" + $(element).find("input[name='cel-pessoal']").val();
                _resultado += "\nTEL;WORK;VOICE:" + $(element).find("input[name='tel-comercial']").val();
                _resultado += "\nTEL;HOME;VOICE:" + $(element).find("input[name='tel-pessoal']").val();
                _resultado += "\nEMAIL;HOME;INTERNET:" + $(element).find("input[name='email-pessoal']").val();
                _resultado += "\nEMAIL;WORK;INTERNET:" + $(element).find("input[name='email-comercial']").val();
                _resultado += "\nURL:" + $(element).find("input[name='website']").val();
                _resultado += "\nADR:;;" + $(element).find("input[name='endereco']").val() + ";" + $(element).find("input[name='cidade']").val() + ";" + $(element).find("input[name='estado']").val() + ";" + $(element).find("input[name='cep']").val() + ";";
                _resultado += "\nORG:" + $(element).find("input[name='empresa']").val();
                _resultado += "\nEND:VCARD";

                return $(element).find('fieldset').eq(1).serialize() + "&" + $('<textarea/>').attr('name', 'valor').val(_resultado).serialize();
            }
        };

        return this.each(function () {
            $(window).unbind({ 'resize': resizeEvent }).bind({ 'resize': resizeEvent });
            var _guid = guid();
            $(this).attr('gerar-qrcode', _guid).addClass(_guid + " gerar-qrcode").load(
                settings.template + "base.html",
                function () {
                    var _base = $(this).attr('gerar-qrcode');
                    $(this).html($(this).html().replace(new RegExp("~/", "gm"), settings.folder));
                    
                    $(this).find('a, form, fieldset, input, select, textarea, button, img').attr('gerar-qrcode', _base);
                    
                    $(this).find('form')
                        .bind({ 'submit': changeEvent })
                        .find('input, select, textarea')
                        .attr('gerar-qrcode', _base)
                        .bind({ 'change': changeEvent });

                    $(this).find("#GerarQRCode-Format").append($(this).find('.options').clone().attr('class', 'options'));
                    $(this).find('.options > a').bind({ 'click': exchangeTemplateEvent });
                    $(this).find('.options > a').first().click();

                    var _list = [];
                    $(this).find('form ul.nav-tabs > li > a').each(function (index) {
                        _list[index] = guid();
                        $(this).attr({
                            'href': ("#" + _list[index]),
                            'aria-controls': (_list[index])
                        });
                    });
                    $(this).find('form div.tab-content > fieldset').each(function (index) {
                        $(this).attr({
                            'id': (_list[index])
                        }).find('div').first().attr({
                            'gerar-qrcode': _base
                        });
                    });
                });
        });

    };
}(jQuery));