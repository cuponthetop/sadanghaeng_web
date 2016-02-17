(function (window) {
  'use strict';

  /**
   * Set up post-list page
   *
   * @param {string}
   */
  function PostList() {
    this.model = new app.Model();
    this.template = new app.Template();
    this.view = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
  }

  var postList = new PostList();

  $(document).ready(function() {

  });

})(window);
