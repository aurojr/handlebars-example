var App = App || {};

(function () {
  'use strict';

  var getProduct = function (node) {
    return node.find('h3').text();
  };

  var select = function (node) {
    var panel = $(node);
    var button = panel.find('button');
    var currentcArt = App.Utils.Product.getCurrentCart() || [];

    if (button.hasClass('show')) {
      currentcArt.remove(getProduct(panel));
      button.addClass('hidden');
      button.removeClass('show');
    } else {
      currentcArt.push(getProduct(panel));
      button.addClass('show');
      button.removeClass('hidden');
    }
    App.Utils.LocalStorage.setItem(App.Utils.LocalStorage.keys.currentCart, currentcArt);
  };

  var loadPage = function (products) {
    return App.API.get(App.Resources.Templates.product.list, function (data) {
      var template = Handlebars.compile(data);
      App.API.changeMainContent(template(products));
    }, 'html');
  };

  var afterLoad = function () {
    var currentcArt = App.Utils.Product.getCurrentCart() || [];
    $('#products-container div.panel').each(function (i, item) {
      var panel = $(item);
      var button = panel.find('button');
      var product = getProduct(panel);
      if ($.inArray(product, currentcArt) >= 0) {
        button.addClass('show');
        button.removeClass('hidden');
      } else {
        button.removeClass('show');
        button.addClass('hidden');
      }
    });

    $('#products-container div.panel').click(function () {
      select(this);
    });
  };

  //--------------- Exported functions -----------------//
  var load = function () {
    return App.Service.Product.search().then(loadPage).then(afterLoad);
  };

  App.Product = App.Product || {};
  App.Product.Controller = {
    List: {
      load: load
    }
  };
}());