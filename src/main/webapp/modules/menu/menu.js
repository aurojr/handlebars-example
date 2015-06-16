var App = App || {};

(function () {
  'use strict';

  var load, fetchItems;

  fetchItems = function () {
    return App.API.get('api/menu', function (data) {
      App.Menu.items = data.items;
    });
  };

  load = function (selector) {
    fetchItems().done(function () {
      App.API.renderPartial(App.Resources.Templates.menu, selector, App.Menu);
    });
  };

  App.Menu = {
    items: [],
    load: load
  };
}());