var App = App || {};

(function () {
  'use strict';

  var register, formatCurrency, getPartialFromFile, getCurrentCart;

  //--------------- Exported functions -----------------//
  register = function () {
    Handlebars.registerHelper('formatCurrency', formatCurrency);
    Handlebars.registerHelper('getPartialFromFile', getPartialFromFile);
    Handlebars.registerHelper('getCurrentCart', getCurrentCart);
  };

  formatCurrency = function (context) {
    var ret = '';

    if (context !== undefined) {
      ret = '$ ' + context;
    }

    return ret;
  };

  getPartialFromFile = function (fileName) {
    var partialName, tplLocationArray;

    tplLocationArray = fileName.split('/');
    partialName = tplLocationArray[tplLocationArray.length - 1].replace('\.html', '');

    return partialName;
  };

  getCurrentCart = function () {
    return App.Utils.LocalStorage.getItem(App.Utils.LocalStorage.keys.currentCart);
  };

  App.Utils = App.Utils || {};
  App.Utils.Helper = {
    register: register,
    formatCurrency: formatCurrency,
    getPartialFromFile: getPartialFromFile
  };

  App.Utils.Helper.register();
}());