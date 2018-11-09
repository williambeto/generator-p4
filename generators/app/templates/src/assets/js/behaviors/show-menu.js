//do jQuery stuff when DOM is ready
$(function () {
    const $body = $('body'), $navOpen = $('[data-js-primary-nav-toggle]');

    // menu global
    $navOpen.on("click", function (event) {
        event.stopPropagation();
        // console.log("default " + event.type + " prevented");
        if ($(this).hasClass('active')) {
            $navOpen.find('.nav-button-text').text('Menu');
            $navOpen.find('.fas').removeClass('fa-times').addClass('fa-bars');
            $body.removeClass('show-menu show-sub-menu');
            $(this).removeClass('active');
        } else {
            $navOpen.find('.nav-button-text').text('Fechar');
            $navOpen.find('.fas').removeClass('fa-bars').addClass('fa-times');
            $body.addClass('show-menu').removeClass('show-sub-menu');
            $(this).addClass('active');
        }
    });

    // menu global
    $(document).on("click", function (event) {
        $navOpen.find('.nav-button-text').text('Menu');
        $navOpen.find('.fas').removeClass('fa-times').addClass('fa-bars');
        $body.removeClass('show-menu show-sub-menu');
        $navOpen.removeClass('active');
    });
});