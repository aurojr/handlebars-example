var App = App || {};

(function () {
  'use strict';

  var index, product, link2, render;

  index = function () {
    console.log('Index page');
  };

  product = function () {
    App.Product.Controller.List.load();
  };

  link2 = function () {
    console.log('Link2 page');
  };

  render = function (uri) {
    App.API.changeMainContent('');
    App.Menu.changeActive(uri);

    if (App.Routes.map[uri]) {
      App.Routes.map[uri]();
    } else {
      console.log('Undefined location');
    }
  };

  App.Routes = {
    map: {
      '': index,
      '#': index,
      '#product': product,
      '#link2': link2
    },
    render: render
  };
}());