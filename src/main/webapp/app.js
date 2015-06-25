var App = App || {};
(function () {
  'use strict';

  var load;

  load = function () {
    jQuery(document).ready(function () {
      jQuery(window).load(function () {
        jQuery('.preloader').delay(400).fadeOut(500);
        App.PreLoader.loadIndex().then(function () {
          App.Routes.render(window.location.hash);
        }, function (obj) {
          console.error('Index page loading has failed! ' + obj.responseText, obj);
        });
      });

      jQuery(window).on('hashchange', function () {
        App.Routes.render(window.location.hash);
      });

      // TODO: Remove this from here
      if (!Array.prototype.remove) {
        Array.prototype.remove = function (val) {
          var i = this.indexOf(val);
          return i > -1 ? this.splice(i, 1) : [];
        };
      }
    });
  };

  App.load = load;
}());