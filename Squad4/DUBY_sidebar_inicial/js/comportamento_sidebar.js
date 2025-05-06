!function(l) {
    "use strict";
  
    l("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
      l("body").toggleClass("sidebar-toggled");
      l(".sidebar").toggleClass("toggled");
      if (l(".sidebar").hasClass("toggled")) {
        l(".sidebar .collapse").collapse("hide");
      }
    });
  
    l(window).resize(function() {
      if (l(window).width() < 768) {
        l(".sidebar .collapse").collapse("hide");
      }
  
      if (l(window).width() < 480 && !l(".sidebar").hasClass("toggled")) {
        l("body").addClass("sidebar-toggled");
        l(".sidebar").addClass("toggled");
        l(".sidebar .collapse").collapse("hide");
      }
    });
  
    l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) {
      if (l(window).width() > 768) {
        var o = e.originalEvent;
        var delta = o.wheelDelta || -o.detail;
        this.scrollTop += 30 * (delta < 0 ? 1 : -1);
        e.preventDefault();
      }
    });
  
    l(document).on("scroll", function() {
      if (l(this).scrollTop() > 100) {
        l(".scroll-to-top").fadeIn();
      } else {
        l(".scroll-to-top").fadeOut();
      }
    });
  
    l(document).on("click", "a.scroll-to-top", function(e) {
      var o = l(this);
      l("html, body").stop().animate({
        scrollTop: l(o.attr("href")).offset().top
      }, 1000, "easeInOutExpo");
      e.preventDefault();
    });
  
  }(jQuery);