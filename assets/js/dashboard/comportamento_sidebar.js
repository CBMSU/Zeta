!function(l) {
    "use strict";
  
    l("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
      l("body").toggleClass("sidebar-toggled");
      l(".sidebar").toggleClass("toggled");
      if (l(".sidebar").hasClass("toggled")) {
        l(".sidebar .collapse").collapse("hide");
      }
    });
  
  }(jQuery);