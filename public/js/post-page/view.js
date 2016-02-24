(function (window) {
  'use strict';

  /**
   * View that abstracts away the browser's DOM completely.
   * It has two simple entry points:
   *
   *   - bind(eventName, handler)
   *     Takes a todo application event and registers the handler
   *   - render(command, parameterObject)
   *     Renders the given command with the options
   */
  function View(template) {
    this.template = template;
  }

  View.prototype._drawPostData = function(parameter) {
    $('#post_container').append(this.template.showPost(parameter))
  };

  View.prototype._drawPostInfoData = function(parameter) {
    $('#post_info_container').append(this.template.showPostInfo(parameter))
  };

  View.prototype._drawCommentData = function(parameter) {
    $('#comment_list_container').append(this.template.showComment(parameter))
  };

  View.prototype.render = function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      redraw: function() {
        self._drawPostData(parameter);
        self._drawPostInfoData(parameter);
        self._drawCommentData(parameter.comments);
      }
    };

    viewCommands[viewCmd]();
  };

  View.prototype.bind = function (event, handler) {
    var self = this;
    if (event === 'writeComment') {
      $('#comment_write_btn').unbind('click').click(function() {
        handler({text:$('#comment_write_input').val(), postID: $('#post_container').data('id') });
      });
    }
  };

  // Export to window
  window.app = window.app || {};
  window.app.View = View;
}(window));