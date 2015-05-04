var App = App || {};
(function () {
    'use strict';

    jQuery(document).ready(function () {
        jQuery(window).load(function () {
            App.PreLoader.loadIndex();
        });

        jQuery(document).ajaxStart(function () {
            jQuery('.preloader').delay(400).fadeOut(500);
        });
    });
}());