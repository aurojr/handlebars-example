var App = App || {};

(function () {
  'use strict';

  var search;

  search = function (successFn) {
    return App.API.get('api/product', function (data) {
      successFn(data);
    });
  };

  App.Product = App.Product || {};
  App.Product.Service = {
    search: search
  };
}());