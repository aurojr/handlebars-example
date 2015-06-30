var App = App || {};

(function () {
  'use strict';

  var loadIndex;

  //--------------- Exported functions -----------------//
  loadIndex = function () {
    return App.Menu.render('nav');
  };

  App.Utils = App.Utils || {};
  App.Utils.PreLoader = {
    loadIndex: loadIndex
  };
}());