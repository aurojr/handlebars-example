var App = App || {};

(function () {
  var load;

  load = function (successFn) {
    return App.API.get('api/menu', function (data) {
      successFn(data);
    });
  };

  App.Menu = App.Menu || {};
  App.Menu.Service = {
    load: load
  };
}());