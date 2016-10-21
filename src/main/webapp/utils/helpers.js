var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//

  var formatCurrency = function (value) {
    var ret = '';

    if (value !== undefined) {
      ret = '$ ' + value;
    }

    return ret;
  };

  var getPartialFromFile = function (fileName) {
    var partialName, tplLocationArray;

    tplLocationArray = fileName.split('/');
    partialName = tplLocationArray[tplLocationArray.length - 1].replace('\.html', '');

    return partialName;
  };

  var getCurrentCart = function () {
    return App.Utils.Product.getCurrentCart();
  };

  var register = function () {
    Handlebars.registerHelper('formatCurrency', formatCurrency);
    Handlebars.registerHelper('getPartialFromFile', getPartialFromFile);
    Handlebars.registerHelper('getCurrentCart', getCurrentCart);
  };

  App.Utils = App.Utils || {};
  App.Utils.Helper = {
    register: register,
    formatCurrency: formatCurrency,
    getPartialFromFile: getPartialFromFile
  };

  App.Utils.Helper.register();
}());