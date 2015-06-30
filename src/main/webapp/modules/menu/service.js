var App = App || {};

(function () {
  'use strict';

  var load;

  //--------------- Exported functions -----------------//
  load = function (successFn) {
    return App.Utils.ServiceUtil.serviceGet('api/menu', successFn);
  };

  App.Menu = App.Menu || {};
  App.Menu.Service = {
    load: load
  };
}());