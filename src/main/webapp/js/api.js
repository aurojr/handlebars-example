var App = App || {};

(function (Handlebars, $) {
    'use strict';

    App.API = {
        processTemplate: function (selector, data) {
            var $element, template;

            $element = $(selector).text();
            template = Handlebars.compile($element);
            $(selector).html(template(data));
        }
    };
}(Handlebars, jQuery));