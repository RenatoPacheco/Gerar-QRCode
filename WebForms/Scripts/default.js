/* Cada método vai gerar a string para um tipo de QRCode específico */
var QRCodeString = new function () {
    this.QRCodeString = '';
    
    this.toString = function () {
        return this.QRCodeString;
    };

    this.url = function (form) {
        var valor;
        
        this.QRCodeString = '';
        valor = $(form).find('input[name="valor"]').val();
        valor = $.trim(valor);
        $(form).find('input[name="valor"]').val(valor);

        if (valor != '') {
            this.QRCodeString = $(form).serialize();
        }            

        return this;
    };

    this.texto = this.url;
};

var GerenciarPreviw = new function () {

    this.urlPreview = '';
    this.urlDownload = '';
    
    this.showPreloader = function () {
        $('img.preloader')
            .stop()
            .hide()
            .fadeIn({
            duration: 300,
            easing: 'swing',
            complete: function () {
                $(this).stop().show();
                GerenciarPreviw.loadPreview();
            }
        });
    };

    this.hidePreloader = function () {
        $('img.preloader')
            .stop()
            .show()
            .fadeOut({
                duration: 300,
                easing: 'swing',
                complete: function () {
                    $(this).stop().hide();
                    GerenciarPreviw.showPreview();
                }
            });
    };
    
    this.loadPreview = function () {
        $('img.preview')
            .unbind('load')
            .stop()
            .hide()
            .attr('src', this.urlPreview).bind({
                'load': function ($event) {
                    $(this).unbind('load');
                    GerenciarPreviw.hidePreloader();
                }
            });
    };

    this.showPreview = function () {
        $('img.preview')
            .unbind('load')
            .stop()
            .hide()
            .fadeIn({
                duration: 300,
                easing: 'swing',
                complete: function () {
                    $(this).stop().show();
                    $('a.download').removeClass('disabled');
                }
        });
    };

    this.hidePreview = function () {
        $('img.preview')
            .unbind('load')
            .stop()
            .show()
            .fadeOut({
                duration: 300,
                easing: 'swing',
                complete: function () {
                    $(this).hide().stop();
                    GerenciarPreviw.showPreloader();
                }
            });
    };

    this.start = function (preview, download) {
        this.urlPreview = preview;
        this.urlDownload = download;
        $('a.download').attr('href', download).addClass('disabled');
        $('img.preview, img.preloader').stop().unbind('load');
        if ($('img.preview').is(':visible'))
        {
            $('img.preloader').hide();
            this.hidePreview();
        }
        else
        {
            $('img.preview').hide();
            $('img.preloader').show();
            this.loadPreview();
        }
    };

};

jQuery(document).ready(function ($) {
    $('input, select, textarea').bind('change', function () {
        var $atual = QRCodeString.toString();
        var $url = "/Ashx/GerarQRCode.ashx?timeout=" + (new Date()).getTime() + "&";
        var $valor = QRCodeString.texto('form').toString();
        if ($valor != '' && $atual != $valor) {
            GerenciarPreviw.start($url + $valor, $url + $valor + "&download=true");
        }
    });
});