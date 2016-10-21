var App = App || {};
(function () {
  'use strict';

  var render = function () {
    App.Routes.render(window.location.hash);
  };

  var loadIndexFailed = function (obj) {
    console.error('Index page loading has failed! ' + obj.responseText, obj);
  };

  //--------------- Exported functions -----------------//
  var load = function () {
    jQuery(document).ready(function () {
      jQuery(window).load(function () {
        // Just an animation - avoid showing handlebars templates when the internet is slow
        jQuery('.preloader').delay(400).fadeOut(500);

        // Page renderer
        App.Utils.PreLoader.loadIndex().then(render, loadIndexFailed);

        // Empty the cart
        // TODO: empty the cart only when unicorns fart
        App.Utils.Product.emptyCart();
      });

      jQuery(window).on('hashchange', render);
    });
  };

  App.load = load;
}());