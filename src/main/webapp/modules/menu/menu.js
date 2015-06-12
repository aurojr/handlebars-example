var App = App || {};

(function () {
  'use strict';

  var load;

  load = function () {
    return App.API.get('api/menu', function (data) {
      App.Menu.items = data.items;
    });
  };

  App.Menu = {
    items: [],
    load: load
  };
}());