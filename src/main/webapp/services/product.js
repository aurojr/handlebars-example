var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var search = function (successFn) {
    return App.Service.Base.get('api/product', successFn);
  };

  App.Service = App.Service || {};
  App.Service.Product = {
    search: search
  };
}());