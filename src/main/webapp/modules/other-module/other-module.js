var App = App || {};

(function () {
  'use strict';

  //--------------- Exported functions -----------------//
  var useApiGreeting = function (name) {
    App.API.doubleGreeting(name);
  };

  var myOwnStuff = function (name) {
    App.API.doubleGreeting(name);
  };

  App.OtherModule = {
    useApiGreeting: useApiGreeting,
    myOwnStuff: myOwnStuff
  };
}());