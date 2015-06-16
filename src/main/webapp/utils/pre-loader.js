var App = App || {};

(function () {
  'use strict';

  var loadIndex;

  loadIndex = function () {
    App.Menu.load('nav');
  };

  App.PreLoader = {
    loadIndex: loadIndex
  };
}());