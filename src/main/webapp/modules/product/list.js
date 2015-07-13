var App = App || {};

(function () {
  'use strict';

  var load,
    select, loadPage, afterLoad,
    selectedList = [];

  select = function (node) {
    var jNode = jQuery(node);
    if (jNode.hasClass('selected')) {
      selectedList.remove(jNode.find('h3').text());
    } else {
      selectedList.push(jNode.find('h3').text());
    }
    jNode.toggleClass('selected');
  };

  loadPage = function (products) {
    console.log('Load');
    return App.API.get(App.Resources.Templates.product.list, function (data) {
      console.log('Compile template');
      var template = Handlebars.compile(data);
      App.API.changeMainContent(template(products));
    }, 'html');
  };

  afterLoad = function () {
    console.log('After Load');
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