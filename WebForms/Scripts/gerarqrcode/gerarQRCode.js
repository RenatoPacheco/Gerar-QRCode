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
        var loadEvent = function (event) {
            $(this).unbind({ 'load': loadEvent, 'error': errorEvent });
            $('.GerarQRCode .download').removeClass('disabled');
        };
        var errorEvent = function (event) {
            $(this).unbind({ 'load': loadEvent, 'error': errorEvent });
            $('.GerarQRCode .download').addClass('disabled');
        };
        var loadTemplate = function (response, status, xhr) {
            if (status == "error") {
                $(this).html('<p>Erro ao carregar formulário.</p>')
            } else {
                $(this).find('input, select, textarea').change(changeEvent);
                $(this).find('input:text, textarea').keyup(changeEvent);
            };
        };
        var exchangeTemplateEvent = function (event) {
            $('.GerarQRCode .nav-tabs a').first().click();
            $('#GerarQRCode-Dados > div')
                .html('<p>Aguarde...</p>')
                .load($(this).attr('href'), loadTemplate);
            return false;
        };
        var changeEvent = function (event) {
            var _dados = $('#GerarQRCode-Dados').serialize();
            var _config = $('#GerarQRCode-Config').serialize();
            
            var $valor = _dados + "&" + _dados;
            var $url = settings.urlPreview + "&timeout=" + (new Date()).getTime() + "&";
            $('.GerarQRCode .download').addClass('disabled').attr('href', $url + $valor + "&download=true");
            $('.GerarQRCode .preview')
                .unbind({ 'load': loadEvent, 'error': errorEvent })
                .PreloadImage({ url: $url + $valor })
                .bind({ 'load': loadEvent, 'error': errorEvent });
            return false;
        };
        return this.each(function () {
            $(this).addClass('GerarQRCode').load(
                settings.template + "base.html",
                function () {
                    $(this).html($(this).html().replace(new RegExp("~/", "gm"), settings.folder));
                    $(this).find('form').bind({ 'submit': changeEvent })
                        .find('input, select, textarea').bind({
                            'change': changeEvent
                    });
                    $('.GerarQRCode .link-url').bind({ 'click' : exchangeTemplateEvent }).click();
                    $('.GerarQRCode .link-text').bind({ 'click': exchangeTemplateEvent });
                });
        });

    };
}(jQuery));