var App = App || {};

(function () {
  'use strict';

  var render;

  render = function (selector) {
    var menuItems;
    App.Menu.Service.load(function (data) {
      menuItems = data;
    }).done(function () {
      App.API.renderPartial(App.Resources.Templates.menu, selector, menuItems);
    });
  };

  App.Menu = {
    render: render
  };
}());