var App = App || {};

(function () {
  'use strict';

  var get, renderPartial, changeMainContent, processTemplate, fetchPartial;

  get = function (url, data, success, dataType) {
    return jQuery.get(url, data, success, dataType);
  };

  processTemplate = function (selector, data) {
    var $element, template;

    $element = jQuery(selector).text();
    template = Handlebars.compile($element);
    jQuery(selector).html(template(data));
  };

  fetchPartial = function (partialName, templateLocation) {
    return App.API.get(templateLocation, function (data) {
      Handlebars.registerPartial(partialName, data);
    }, 'html');
  };

  renderPartial = function (templateLocation, selector, data) {
    var partialName = App.Helper.getPartialFromFile(templateLocation);

    fetchPartial(partialName, templateLocation).done(function () {
      processTemplate(selector, data);
    });
  };

  changeMainContent = function (content) {
    jQuery('#container').html(content);
  };

  App.API = {
    get: get,
    renderPartial: renderPartial,
    changeMainContent: changeMainContent
  };
}());