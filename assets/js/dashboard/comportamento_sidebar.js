!function(l) {
    "use strict";

    if (l(window).width() > 768) {
      l("body").removeClass("sidebar-toggled");
      l(".sidebar").removeClass("toggled");
    }
  
    l("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
      l("body").toggleClass("sidebar-toggled");
      l(".sidebar").toggleClass("toggled");
      if (l(".sidebar").hasClass("toggled")) {
        l(".sidebar .collapse").collapse("hide");
      }
    });
  
  }(jQuery);