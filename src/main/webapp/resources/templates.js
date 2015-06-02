var App = App || {};

(function () {
  'use strict';

  var templates;

  templates = function () {
    return {
      menu: 'modules/menu/menu.html'
    };
  };

  App.Resources = App.Resources || {};
  App.Resources.Templates = templates();
}());