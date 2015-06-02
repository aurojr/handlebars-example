var App = App || {};

(function () {
  'use strict';

  var useApiGreeting, myOwnStuff;

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