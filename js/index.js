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
     // scroll body to 0px on click
  $backToTop.click(function () {
      $backToTop.tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});
