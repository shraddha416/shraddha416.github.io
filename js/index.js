 $(function() {
    $("img.lazy").lazyload();
   //back to top
     var $backToTop = $('#back-to-top').fadeIn();
     $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
          $backToTop.fadeIn();
      } else {
          $backToTop.fadeOut();
      }
    });
  });

