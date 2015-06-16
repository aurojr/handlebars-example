var App = App || {};

(function () {
  'use strict';

  var loadIndex;

  loadIndex = function () {
    App.Menu.load().done(function () {
      App.API.renderPartial(App.Resources.Templates.menu, 'nav', App.Menu);
    });
  };

  App.PreLoader = {
    loadIndex: loadIndex
  };
}());