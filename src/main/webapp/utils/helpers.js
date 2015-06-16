var App = App || {};

(function () {
  'use strict';

  var register, formatCurrency, getPartialFromFile;

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

  register = function () {
    Handlebars.registerHelper('formatCurrency', formatCurrency);
    Handlebars.registerHelper('getPartialFromFile', getPartialFromFile);
  };

  App.Helper = {
    register: register,
    formatCurrency: formatCurrency,
    getPartialFromFile: getPartialFromFile
  };

  App.Helper.register();
}());