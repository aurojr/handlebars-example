var App = App || {};
(function () {
  'use strict';

  var load;

  load = function () {
    jQuery(document).ready(function () {
      jQuery(window).load(function () {
        jQuery('.preloader').delay(400).fadeOut(500);
        App.PreLoader.loadIndex();

        App.Routes.render(window.location.hash);
      });

      jQuery(window).on('hashchange', function () {
        App.Routes.render(window.location.hash);
      });
    });
  };

  App.load = load;
}());