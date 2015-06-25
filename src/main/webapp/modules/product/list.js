var App = App || {};

(function () {
  'use strict';

  var list;

  list = function () {
    var products;
    App.Product.Service.search(function (data) {
      products = {
        products: data
      };
    }).then(function () {
      App.API.get(App.Resources.Templates.product.list, function (data) {
        var template = Handlebars.compile(data);
        App.API.changeMainContent(template(products));
      }, 'html');
    }, function (obj) {
      console.error('Products loading has failed! ' + obj.responseText, obj);
    });
  };

  App.Product = App.Product || {};
  App.Product.Controller = {
    list: list
  };
}());