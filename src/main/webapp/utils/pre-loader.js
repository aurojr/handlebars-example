var App = App || {};

(function () {
  'use strict';

  var loadIndex;

  loadIndex = function () {
    App.Menu.render('nav');
  };

  App.PreLoader = {
    loadIndex: loadIndex
  };
}());