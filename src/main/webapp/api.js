var App = App || {};

(function () {
  'use strict';

  var processTemplate = function (selector, data) {
    var $element, template;

    $element = jQuery(selector).text();
    template = Handlebars.compile($element);
    jQuery(selector).html(template(data));
  };

  var fetchPartial = function (partialName, templateLocation) {
    return App.API.get(templateLocation, function (data) {
      Handlebars.registerPartial(partialName, data);
    }, 'html');
  };

  //--------------- Exported functions -----------------//
  var get = function (url, data, success, dataType) {
    return Promise.resolve(jQuery.get(url, data, success, dataType));
  };

  var renderPartial = function (templateLocation, selector, data) {
    var partialName = App.Utils.Helper.getPartialFromFile(templateLocation);

    return fetchPartial(partialName, templateLocation).then(function () {
      processTemplate(selector, data);
    });
  };

  var changeMainContent = function (content) {
    jQuery('#container').html(content);
  };

  App.API = {
    get: get,
    renderPartial: renderPartial,
    changeMainContent: changeMainContent
  };
}());