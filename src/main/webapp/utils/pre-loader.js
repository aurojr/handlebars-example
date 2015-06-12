var App = App || {};

(function () {
  'use strict';

  var loadIndex;

  loadIndex = function () {
    App.Menu.load().done(function () {
      App.API.fetchPartial(App.Resources.Templates.menu, 'menu').done(function () {
        App.API.processTemplate('nav', App.Menu);
      });
    });
  };

  App.PreLoader = {
    loadIndex: loadIndex
  };
}());