var App = App || {};
(function () {
  'use strict';

  var load,
    render, loadIndexFailed;

  render = function () {
    App.Routes.render(window.location.hash);
  };

  loadIndexFailed = function (obj) {
    console.error('Index page loading has failed! ' + obj.responseText, obj);
  };

  //--------------- Exported functions -----------------//
  load = function () {
    jQuery(document).ready(function () {
      jQuery(window).load(function () {
        // Just an animation - avoid showing handlebars templates when the internet is slow
        jQuery('.preloader').delay(400).fadeOut(500);

        // Page renderer
        App.Utils.PreLoader.loadIndex().then(render, loadIndexFailed);
      });

      jQuery(window).on('hashchange', render);

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