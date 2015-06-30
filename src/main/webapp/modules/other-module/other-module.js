var App = App || {};

(function () {
  'use strict';

  var useApiGreeting, myOwnStuff;

  //--------------- Exported functions -----------------//
  useApiGreeting = function (name) {
    App.API.doubleGreeting(name);
  };

  myOwnStuff = function (name) {
    App.API.doubleGreeting(name);
  };

  App.OtherModule = {
    useApiGreeting: useApiGreeting,
    myOwnStuff: myOwnStuff
  };
}());