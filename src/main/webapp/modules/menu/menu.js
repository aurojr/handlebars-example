var App = App || {};

(function () {
  'use strict';

  var loadMenuItems = function () {
    jQuery.get('api/menu', function (data) {
      App.Menu.items = data.items;
    });
  };

  App.Menu = {
    items: [],
    loadMenuItems: loadMenuItems
  };

  App.Menu.loadMenuItems();
}());