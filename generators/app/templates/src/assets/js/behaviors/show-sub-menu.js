//do jQuery stuff when DOM is ready
$(function () {
  var $body = $('body'),
    $subMenuContent = $('[data-js-submenu]'),
    $subMenuOpen = $('[data-js-submenu-open]'),
    $subMenuClose = $('[data-js-submenu-close]'),
    isComputer = $body.hasClass('computer'),
    isOpen = false;

  // se não for pc
  if (!isComputer) {
    var $hasSubMenu = $('.has-sub-menu');
    $hasSubMenu.on("click", "> a", function (event) {
      if ($(this).parent('li').hasClass('show-sub-menu')) {
        $hasSubMenu.removeClass('show-sub-menu');
        $hasSubMenu.find('.sub-menu-ico').removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-down');
        return false;
      } else {
        $hasSubMenu.removeClass('show-sub-menu');
        $hasSubMenu.find('.sub-menu-ico').removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-down');
        $(this).parent('li').addClass('show-sub-menu');
        $(this).find('.sub-menu-ico').removeClass('fa-angle-down fa-angle-up').addClass('fa-angle-up');
        return false;
      }
      return false;
    });
  }
});
