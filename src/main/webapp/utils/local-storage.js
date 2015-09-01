var App = App || {};

(function () {
  'use strict';
  var keys, getItem, setItem, removeItem;

  //--------------- Exported functions -----------------//
  setItem = function (name, value) {
    value = JSON.stringify(value);
    localStorage.setItem(name, value);
  };

  getItem = function (name) {
    var value = localStorage.getItem(name);
    return JSON.parse(value);
  };

  removeItem = function (name) {
    localStorage.removeItem(name);
  };

  keys = {
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