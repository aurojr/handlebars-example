var App = App || {};

(function () {
  'use strict';

  var render, changeActive;

  render = function (selector) {
    var menuItems;
    App.Menu.Service.load(function (data) {
      menuItems = data;
    }).done(function () {
      App.API.renderPartial(App.Resources.Templates.menu, selector, menuItems);
    });
  };

  changeActive = function (uri) {
    jQuery('nav li').removeClass('active');
    jQuery('nav li a[href^="' + uri + '"]').parent().addClass('active');
  };

  App.Menu = {
    render: render,
    changeActive: changeActive
  };
}());