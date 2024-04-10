function fun1() {
    var lastScrollTop = 0;
    $('.para2, .img2, .second').hide();
    $(window).scroll(function() {
      var scrollThreshold = 10;
      var currentScrollTop = $(this).scrollTop();
  
      // Check if the user has scrolled past the threshold
      if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          $('.para, .img1, .one').hide();
          fun2();
        } else {
          // Scrolling up
          $('.para2, .img2, .second').hide();
          $('.para, .img1, .one').fadeIn(2000);
        }
  
        lastScrollTop = currentScrollTop;
      }
    });
  }
  
  function fun2() {
    $('.para2, .img2, .second').fadeIn(2000);
  }
  
  // Call the function to initialize the scroll event
  fun1();
  