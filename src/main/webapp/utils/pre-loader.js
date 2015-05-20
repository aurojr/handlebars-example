var App = App || {};

(function () {
  'use strict';

  var fetchMenuPartial, loadMenu, loadIndex;

  fetchMenuPartial = function () {
    return App.API.get(App.Resources.Templates.menu, function (data) {
      Handlebars.registerPartial('menu', data);
    }, 'html');
  };

  loadMenu = function () {
    fetchMenuPartial().done(function () {
      App.API.processTemplate('nav', App.Menu);
    });
  };

  loadIndex = function () {
    loadMenu();
  };

  App.PreLoader = {
    loadIndex: loadIndex
  };
}());