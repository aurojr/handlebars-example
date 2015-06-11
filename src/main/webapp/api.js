var App = App || {};

(function () {
  'use strict';

  var processTemplate, get, fetchPartial;

  processTemplate = function (selector, data) {
    var $element, template;

    $element = jQuery(selector).text();
    template = Handlebars.compile($element);
    jQuery(selector).html(template(data));
  };

  get = function (url, data, success, dataType) {
    return jQuery.get(url, data, success, dataType);
  };

  fetchPartial = function (templateLocation, partialName) {
    return App.API.get(templateLocation, function (data) {
      Handlebars.registerPartial(partialName, data);
    }, 'html');
  };

  App.API = {
    processTemplate: processTemplate,
    get: get,
    fetchPartial: fetchPartial
  };
}());