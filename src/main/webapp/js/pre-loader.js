var App = App || {};

(function () {
  'use strict';

  var fetchMenuPartial = function () {
    return jQuery.get('./modules/menu/menu.html', function (data) {
      Handlebars.registerPartial('menu', data);
    }, 'html');
  };

  var loadMenu = function () {
    fetchMenuPartial().done(function () {
      App.API.processTemplate('nav', App.Menu);
    });
  };

  App.PreLoader = {
    loadIndex: function () {
      loadMenu();
    }
  };
}());