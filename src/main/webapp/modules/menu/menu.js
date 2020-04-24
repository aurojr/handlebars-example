var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var render = function (selector) {
    var menuItems;
    return App.Service.Menu.load(function (data) {
      menuItems = data;
    }).then(function () {
      return App.API.renderPartial(App.Resources.Templates.menu, selector, menuItems);
    });
  };

  var changeActive = function (uri) {
    jQuery('nav li').removeClass('active');
    jQuery('nav li a[href^="' + uri + '"]').parent().addClass('active');
  };

  App.Menu = {
    render: render,
    changeActive: changeActive
  };
}());