var App = App || {};

(function () {
  'use strict';

  var templates = function () {
    return {
      menu: 'modules/menu/menu.html',
      product: {
        list: 'modules/product/list.html'
      }
    };
  };

  App.Resources = App.Resources || {};
  App.Resources.Templates = templates();
}());