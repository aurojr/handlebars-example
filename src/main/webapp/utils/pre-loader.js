var App = App || {};

(function () {
  'use strict';

  var loadIndex, emptyCart;

  //--------------- Exported functions -----------------//
  loadIndex = function () {
    return App.Menu.render('nav');
  };

  emptyCart = function () {
    App.Utils.LocalStorage.removeItem(App.Utils.LocalStorage.keys.currentCart);
  };

  App.Utils = App.Utils || {};
  App.Utils.PreLoader = {
    loadIndex: loadIndex,
    emptyCart: emptyCart
  };
}());