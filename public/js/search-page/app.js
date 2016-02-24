(function (window) {
  'use strict';

  /**
   * Set up login page
   *
   * @param {string}
   */
  function validate() {
    var regExCheckEmptyText = /(^\s*)(\s*$)/;
    var searchInput = $('#search_input').val();
    
    var status = true;
    
    if(!searchInput || regExCheckEmptyText.test(searchInput)) {
      alert("검색어를 제대로 입력해주세요!");
      status = false;
    }
    
    return status;
  }
  
  function bind() {
    $('#search_btn').click(function () {
      if (validate() === true) {
        var searchInput = {
          query: $('#search_input').val()
        };

        HttpUtil.get('http://localhost:5001/api/v1/universities/:univid/search', searchInput, function (err, result) {
          if (err) {
            return;
          }
          console.log(result);
        });
      }
    });
  }

  $(document).ready(function() {
    bind();
  });

})(window);
