var App = App || {};

(function () {
  'use strict';

  var product, render;

  product = function () {
    var products;
    App.Product.search(function (data) {
      products = {
        products: data
      };
    }).done(function () {
      App.API.get(App.Resources.Templates.product, function (data) {
        var template = Handlebars.compile(data);
        jQuery('#container').html(template(products));
      }, 'html');
    });
  };

  render = function (url) {
    if (App.Routes.map[url]) {
      App.Routes.map[url]();
    } else {
      console.log('Undefined location');
    }
  };

  App.Routes = {
    map: {
      '': product
    },
    render: render
  };
}());