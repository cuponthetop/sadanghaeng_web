(function (window) {
  'use strict';

  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;'
  };

  var escapeHtmlChar = function (chr) {
    return htmlEscapes[chr];
  };

  var reUnescapedHtml = /[&<>"'`]/g;
  var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

  var escape = function (string) {
    return (string && reHasUnescapedHtml.test(string))
      ? string.replace(reUnescapedHtml, escapeHtmlChar)
      : string;
  };

  /**
   * Sets up defaults for all the Template methods such as a default template
   *
   * @constructor
   */
  function Template() {
    this.postTemplate
      =	'<div class="title-container">'
      +   '<p>{{title}}</p>'
      + '</div>'
      + '<div class="info-container">'
      +	  '<span class="post-author">{{author}}</span>'
      +	  '<span class="post-date">{{postDate}}</span>'
      +	  '<span class="post-label post-view-label">View</span>'
      +	  '<span class="post-value post-view">{{viewCount}}</span>'
      +	'</div>'
      +	'<div class="content-container">'
      +	  '{{content}}'
      +	'</div>';

    this.postInfoTemplate
      =	'<span class="post-like-label active"></span>'
      + '<span class="post-value post-like">{{likeCount}}</span>'
      + '<span class="post-dislike-label"></span>'
      + '<span class="post-value post-dislike">{{dislikeCount}}</span>'
      + '<div class="comment-info">'
      + '<span class="comment-text">댓글</span>'
      + '<span class="comment-text">{{commentCount}}</span>'
      +	'</div>';

    this.commentTemplate
      =	'<li data-id="{{id}}" class="comment-item">'
      +		'<div class="author">{{author}}</div>'
      +		'<div class="content">{{content}}</div>'
      +   '<div class="comment-info">'
      +     '<span class="comment-date">{{writeTime}}</span>'
      +     '<span class="like-text">좋아요</span>'
      +     '<span class="like-label">하트</span>'
      +     '<span class="comment-like">{{likeCount}}</span>'
      +   '</div>'
      +	'</li>';
  }

  Template.prototype.showPost = function(data) {
    var view = '';
    var template = this.postTemplate;

    template = template.replace('{{title}}', data.title);
    template = template.replace('{{author}}', data.author);
    template = template.replace('{{postDate}}', data.postDate);
    template = template.replace('{{viewCount}}', data.viewCount);
    template = template.replace('{{content}}', data.content);

    view = view + template;

    return view;
  };

  Template.prototype.showPostInfo = function(data) {
    var view = '';
    var template = this.postInfoTemplate;

    template = template.replace('{{likeCount}}', data.likeCount);
    template = template.replace('{{dislikeCount}}', data.dislikeCount);
    template = template.replace('{{commentCount}}', data.commentCount);

    view = view + template;

    return view;
  };

  Template.prototype.showComment = function(data) {
    var i, l;
    var view = '';

    for (i = 0, l = data.length; i < l; i++) {
      var template = this.commentTemplate;

      template = template.replace('{{id}}', data[i].cid);
      template = template.replace('{{author}}', escape(data[i].author));
      template = template.replace('{{content}}', escape(data[i].content));
      template = template.replace('{{writeTime}}', data[i].writeTime);
      template = template.replace('{{likeCount}}', data[i].likeCount);

      view = view + template;
    }

    return view;
  };

  // Export to window
  window.app = window.app || {};
  window.app.Template = Template;
})(window);