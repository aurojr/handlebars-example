var App = App || {};
(function ($) {
    'use strict';

    $(document).ready(function () {
        $(window).load(function () {
            App.PreLoader.loadIndex();
        });

        $(document).ajaxStart(function () {
            $('.preloader').delay(400).fadeOut(500);
        });
    });
}(jQuery));