/*global Handlebars:true, jQuery:true, console:true*/

var App = App || {};
(function (Handlebars, $) {
    'use strict';

    App.PreLoader = {
        loadIndex: function () {
            App.PreLoader.loadMenu();
        },

        loadMenu: function () {
            App.PreLoader.fetchMenuPartial().done(function () {
                App.PreLoader.processMenu('nav', App.PreLoader.Menu);
            });
        },

        fetchMenuPartial: function () {
            return $.get('./modules/menu/menu.html', function (data) {
                Handlebars.registerPartial('menu', data);
            }, "html");
        },

        processMenu: function (selector, data) {
            var $menu, template;

            $menu = $(selector).text();
            template = Handlebars.compile($menu);
            $(selector).html(template(data));
        },

        Menu: {
            items: [
                {
                    label: 'Link1',
                    href: '/link1'
                }, {
                    label: 'Link2',
                    href: '/link2'
                }, {
                    label: 'Link3',
                    href: '/link3'
                }, {
                    label: 'Link4',
                    href: '/link4'
                }]
        }
    };
}(Handlebars, jQuery));