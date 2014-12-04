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

            var $valor = $(_classeBase + ' form').serialize();
            var $url = settings.urlPreview + "&timeout=" + (new Date()).getTime() + "&";
            $(_classeBase + ' .preview a').addClass('disabled').attr('href', $url + $valor + "&download=true");
            $(_classeBase + ' .preview img')
                .unbind({ 'load': loadEvent, 'error': errorEvent })
                .PreloadImage({ url: $url + $valor })
                .bind({ 'load': loadEvent, 'error': errorEvent });
            return false;
        };

        return this.each(function () {
            var _guid = guid();
            $(this).attr('gerar-qrcode', _guid).addClass(_guid).load(
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

                    $(this).find('.link-url').bind({ 'click': exchangeTemplateEvent }).click();
                    $(this).find('.link-text').bind({ 'click': exchangeTemplateEvent });

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