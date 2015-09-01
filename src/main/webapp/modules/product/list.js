var App = App || {};

(function () {
  'use strict';

  var load,
    select, loadPage, afterLoad, getProduct;

  getProduct = function (node) {
    return node.find('h3').text();
  };

  select = function (node) {
    var jNode = jQuery(node),
      selectedList = App.Utils.LocalStorage.getItem(App.Utils.LocalStorage.keys.currentCart) || [];
    if (jNode.hasClass('selected')) {
      selectedList.remove(getProduct(jNode));
    } else {
      selectedList.push(getProduct(jNode));
    }
    jNode.toggleClass('selected');
    App.Utils.LocalStorage.setItem(App.Utils.LocalStorage.keys.currentCart, selectedList);
  };

  loadPage = function (products) {
    return App.API.get(App.Resources.Templates.product.list, function (data) {
      var template = Handlebars.compile(data);
      App.API.changeMainContent(template(products));
    }, 'html');
  };

  afterLoad = function () {
    var selectedList = App.Utils.LocalStorage.getItem(App.Utils.LocalStorage.keys.currentCart) || [];
    jQuery('div#products-container>div').each(function (i, item) {
      var jNode = jQuery(item),
        product = getProduct(jNode);
      if ($.inArray(product, selectedList) >= 0) {
        jNode.toggleClass('selected');
      }
    });

    jQuery('div#products-container>div').click(function () {
      select(this);
    });
  };

  //--------------- Exported functions -----------------//
  load = function () {
    return App.Service.Product.search().then(loadPage).then(afterLoad);
  };

  App.Product = App.Product || {};
  App.Product.Controller = {
    List: {
      load: load
    }
  };
}());