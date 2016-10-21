var App = App || {};

(function () {
  'use strict';

  var index = function () {
    console.log('Index page');
  };

  var product = function () {
    App.Product.Controller.List.load();
  };

  var link2 = function () {
    console.log('Link2 page');
  };

  var render = function (uri) {
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