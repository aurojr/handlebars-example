var App = App || {};

(function () {
  'use strict';

  var load, list, select,
    selectedList = [];

  list = function () {
    var products;
    return App.Product.Service.search(function (data) {
      products = {
        products: data
      };
    }).then(function () {
      App.API.get(App.Resources.Templates.product.list, function (data) {
        var template = Handlebars.compile(data);
        App.API.changeMainContent(template(products));
      }, 'html').then(function () {
        jQuery('div#products-container>div').click(function () {
          select(this);
        });
      });
    });
  };

  select = function (node) {
    var jNode = jQuery(node);
    if (jNode.hasClass('selected')) {
      selectedList.remove(jNode.find('h3').text());
    } else {
      selectedList.push(jNode.find('h3').text());
    }
    jNode.toggleClass('selected');
  };

  load = function () {
    list();
  };

  App.Product = App.Product || {};
  App.Product.Controller = {
    List: {
      load: load
    }
  };
}());