var App = App || {};

(function () {
  'use strict';

  var init, loadMenuItems;

  loadMenuItems = function () {
    App.API.get('api/menu', function (data) {
      App.Menu.items = data.items;
    });
  };

  init = function () {
    loadMenuItems();
  };

  App.Menu = {
    items: [],
    init: init
  };

  App.Menu.init();
}());