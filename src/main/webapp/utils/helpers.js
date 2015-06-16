var App = App || {};

(function () {
  'use strict';

  var register, formatCurrency;

  formatCurrency = function (context) {
    var ret = '';

    if (context !== undefined) {
      ret = '$ ' + context;
    }

    return ret;
  };

  register = function () {
    Handlebars.registerHelper('formatCurrency', formatCurrency);
  };

  App.Helper = {
    register: register,
    formatCurrency: formatCurrency
  };

  App.Helper.register();
}());