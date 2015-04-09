var App = App || {};

(function (Handlebars, $) {
    'use strict';

    App.PreLoader = {
        loadIndex: function () {
            App.PreLoader.loadMenu();
        },

        loadMenu: function () {
            App.PreLoader.fetchMenuPartial().done(function () {
                App.API.processTemplate('nav', App.PreLoader.Menu);
            });
        },

        fetchMenuPartial: function () {
            return $.get('./modules/menu/menu.html', function (data) {
                Handlebars.registerPartial('menu', data);
            }, "html");
        },

        Menu: {
            items: [
                {
                    label: 'Link1',
                    href: 'link1'
                }, {
                    label: 'Link2',
                    href: 'link2'
                }, {
                    label: 'Link3',
                    href: 'link3'
                }, {
                    label: 'Link4',
                    href: 'link4'
                }]
        }
    };
}(Handlebars, jQuery));