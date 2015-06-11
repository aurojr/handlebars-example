var App = App || {};

(function () {
  'use strict';

  var loadMenu, loadIndex;

  loadMenu = function () {
    App.API.fetchPartial(App.Resources.Templates.menu, 'menu').done(function () {
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