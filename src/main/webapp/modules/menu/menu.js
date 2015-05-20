var App = App || {};

(function () {
  'use strict';

  var loadMenuItems;

  loadMenuItems = function () {
    App.API.get('api/menu', function (data) {
      App.Menu.items = data.items;
    });
  };

  App.Menu = {
    items: [],
    loadMenuItems: loadMenuItems
  };

  App.Menu.loadMenuItems();
}());