(function (window) {
  'use strict';

  /**
   * Takes a model and view and acts as the controller between them
   *
   * @constructor
   * @param {object} model The model instance
   * @param {object} view The view instance
   */
  function Controller(model, view) {
    var self = this;
    self.model = model;
    self.view = view;

  }

  // Export to window
  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);