(function (window) {
  'use strict';

  /**
   * Creates a new Model instance.
   *
   * @constructor
   */
  function Model() {

  }

  Model.prototype.getUnivInfo = function(parameter, callback) {
    //TODO: 서버 연동

    callback("한양대" + " 가림판");
  };

  Model.prototype.getPostList = function(parameter, callback) {
    //TODO: 서버에서 데이터 가져오는 부분 만들어야함!
    var postList = [
      {
        pid: 'abc',
        title: '테스트',
        author: '글쓴이',
        written: '3시간전',
        viewCount: 10,
        likeCount: 1,
        dislikeCount: 3
      },
      {
        pid: 'abc',
        title: '테스트',
        author: '글쓴이',
        written: '3시간전',
        viewCount: 10,
        likeCount: 1,
        dislikeCount: 3
      },
      {
        pid: 'abc',
        title: '테스트',
        author: '글쓴이',
        written: '3시간전',
        viewCount: 10,
        likeCount: 1,
        dislikeCount: 3
      }
    ];
    callback(postList);
  };

  // Export to window
  window.app = window.app || {};
  window.app.Model = Model;
})(window);