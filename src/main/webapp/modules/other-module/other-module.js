var App = App || {};

(function () {
    'use strict';

    App.OtherModule = {
        useApiGreeting: function (name) {
            App.API.doubleGreeting(name);
        },

        myOwnStuff: function (callback) {
            if (typeof callback === 'function') {
                callback('test');
            }
        }
    };
}());