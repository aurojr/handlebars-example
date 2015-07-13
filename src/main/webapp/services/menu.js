var App = App || {};

(function () {
  'use strict';

  var load;

  //--------------- Exported functions -----------------//
  load = function (successFn) {
    return App.Service.Base.get('api/menu', successFn);
  };

  App.Service = App.Service || {};
  App.Service.Menu = {
    load: load
  };
}());