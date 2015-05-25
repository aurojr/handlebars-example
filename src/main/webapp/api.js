var App = App || {};

(function () {
  'use strict';

  var processTemplate, get;

  processTemplate = function (selector, data) {
    var $element, template;

    $element = jQuery(selector).text();
    template = Handlebars.compile($element);
    jQuery(selector).html(template(data));
  };

  get = function (url, data, success, dataType) {
    return jQuery.get(url, data, success, dataType);
  };

  App.API = {
    processTemplate: processTemplate,
    get: get
  };
}());