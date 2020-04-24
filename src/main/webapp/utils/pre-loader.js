var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var loadIndex = function () {
    return App.Menu.render('nav');
  };

  App.Utils = App.Utils || {};
  App.Utils.PreLoader = {
    loadIndex: loadIndex
  };
}());