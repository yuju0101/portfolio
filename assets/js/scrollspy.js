$(document).ready(function() {
    $(window).on("scroll", function() {
      var scrollPos = $(document).scrollTop();
      
      // 檢查每個區域的滾動位置，並高亮對應的連結
      $('.list-group-item').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        // 檢查滾動是否到達該區域
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.list-group-item').removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    });
  });