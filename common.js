$(document).ready(function () {
  // bootstrap scrollspy
  $('body').scrollspy({
    target: '.navbar-scrollspy',
    offset: 470
  });

  // smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 700);
        return false;
      }
    }
  });

  // prevent shift when font weight changes
  $('.menu-item').each(function(){
    $(this).width($(this).width() + 5);
  });

});