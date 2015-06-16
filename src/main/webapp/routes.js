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

  render = function (uri) {
    App.API.changeMainContent('');

    // Remove trailing #
    uri = uri.substr(1);

    if (App.Routes.map[uri]) {
      App.Routes.map[uri]();
    } else {
      console.log('Undefined location');
    }
  };

  App.Routes = {
    map: {
      '': product,
      'product': product
    },
    render: render
  };
}());