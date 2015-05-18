var App = App || {};

(function () {
  'use strict';

  var items;

  var getMenuItems = function () {
    var items;
    jQuery.get('api/menu', function (data) {
      items = data;
    });
    return items;
  };

  App.Menu = {
    items: items,

    load: function () {
      this.items = getMenuItems();
    }
  };

  App.Menu.load();
}());