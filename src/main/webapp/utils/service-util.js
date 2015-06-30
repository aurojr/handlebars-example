var App = App || {};

(function () {
  'use strict';

  var serviceGet;

  //--------------- Exported functions -----------------//
  serviceGet = function (serviceUrl, successFn) {
    return App.API.get(serviceUrl, function (data) {
      if (typeof successFn === 'function') {
        successFn(data);
      }
    });
  };

  App.Utils = App.Utils || {};
  App.Utils.ServiceUtil = {
    serviceGet: serviceGet
  };

}());