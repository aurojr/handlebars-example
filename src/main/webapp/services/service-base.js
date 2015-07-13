var App = App || {};

(function () {
  'use strict';

  var get;

  //--------------- Exported functions -----------------//
  get = function (serviceUrl, successFn) {
    return App.API.get(serviceUrl, function (data) {
      if (typeof successFn === 'function') {
        successFn(data);
      }
    });
  };

  App.Service = App.Service || {};
  App.Service.Base = {
    get: get
  };

}());