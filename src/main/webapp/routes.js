var App = App || {};

(function () {
  'use strict';

  var product, render;

  product = function () {
    jQuery('nav li a[href$="product"]').parent().addClass('active');
    App.Product.Controller.list();
  };

  render = function (uri) {
    App.API.changeMainContent('');
    jQuery('nav li').removeClass('active');

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