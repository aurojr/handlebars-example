var App = App || {};

(function () {
    'use strict';

    App.API = {
        processTemplate: function (selector, data) {
            var $element, template;

            $element = jQuery(selector).text();
            template = handlebars.compile($element);
            jQuery(selector).html(template(data));
        }
    };
}());