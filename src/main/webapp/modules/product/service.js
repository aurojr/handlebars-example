var App = App || {};

(function () {
  'use strict';

  var search;

  //--------------- Exported functions -----------------//
  search = function (successFn) {
    return App.Utils.ServiceUtil.serviceGet('api/product', successFn);
  };

  App.Product = App.Product || {};
  App.Product.Service = {
    search: search
  };
}());