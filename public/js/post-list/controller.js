(function (window) {
  'use strict';

  var PER_PAGE = 7;
  var pageNum = 1;

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

  Controller.prototype.setView = function() {
    var self = this;
    self._updatePostList();
  };

  Controller.prototype._updatePostList = function () {
    var self = this;
    self.model.getPostList({ page: pageNum, perPage: PER_PAGE }, function(data) {
      self.view.render('redraw', data);
    });
  };

  // Export to window
  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);