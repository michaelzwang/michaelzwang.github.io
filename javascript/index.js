$( document ).ready(function() {

  // === smooth scrolling from nav ===
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // === projects ===
  $(".img").mouseenter(function(){
    $(this).addClass("hover");
  })
  .mouseleave(function(){
    $(this).removeClass("hover");
  });

  // ===== Scroll to Top ====
  $('#return-to-top').hide();

  $(window).scroll(function() {
      if ($(this).scrollTop() >= 500) {
          $('#return-to-top').fadeIn(300);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(300);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });

  // === page transition ===
  setTimeout(function(){
      $("#pageloader").fadeOut(1000);
  }, 2000);

});
