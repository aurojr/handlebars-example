var App = App || {};

(function () {
  'use strict';

  var search;

  search = function (successFn) {
    return App.API.get('api/menu', function (data) {
      successFn(data);
    });
  };

  App.Product = {
    search: search
  };
}());