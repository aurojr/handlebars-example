var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var setItem = function (name, value) {
    value = JSON.stringify(value);
    localStorage.setItem(name, value);
  };

  var getItem = function (name) {
    var value = localStorage.getItem(name);
    return JSON.parse(value);
  };

  var removeItem = function (name) {
    localStorage.removeItem(name);
  };

  var keys = {
    currentCart: 'currentCart'
  };

  App.Utils = App.Utils || {};
  App.Utils.LocalStorage = {
    keys: keys,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem
  };
}());