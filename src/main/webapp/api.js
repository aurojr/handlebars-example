var App = App || {};

(function () {
  'use strict';

  var get, renderPartial, changeMainContent,
    processTemplate, fetchPartial;

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

  //--------------- Exported functions -----------------//
  get = function (url, data, success, dataType) {
    return Promise.resolve(jQuery.get(url, data, success, dataType));
  };

  renderPartial = function (templateLocation, selector, data) {
    var partialName = App.Utils.Helper.getPartialFromFile(templateLocation);

    return fetchPartial(partialName, templateLocation).then(function () {
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