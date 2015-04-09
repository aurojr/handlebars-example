/*global jQuery:true */

var App = App || {};
(function ($) {
    'use strict';

    $(document).ready(function () {
        $(window).load(function () {
            App.PreLoader.loadIndex();
        });
    });
}(jQuery));