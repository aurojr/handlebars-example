var App = App || {};
(function () {
  'use strict';

  jQuery(document).ready(function () {
    jQuery(window).load(function () {
      jQuery('.preloader').delay(400).fadeOut(500);
      App.PreLoader.loadIndex();
    });
  });
}());