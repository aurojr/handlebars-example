var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var get = function (serviceUrl, successFn) {
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