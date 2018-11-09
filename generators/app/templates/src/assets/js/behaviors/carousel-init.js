import 'owl.carousel';

$(window).on("load", function () {
  const $homeSlider = $('[data-js-slider-home]'),
          $colecoesSlider = $('[data-js-slider-colecoes]');

  /* counter */
  function navSize(event) {
    const $custom_nav = $('.custom-nav');
    let height = $(event.target).find('.active').find('.colection-item-img').outerHeight(true);
    $custom_nav.css({height: height});
  }

  //removeOwlCarousel
  function removeOwlCarousel($carousel) {
    if ($carousel.length > 0) {
      if ($carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.removeClass('owl-carousel');
      }
    }
  }

  // Home Slider
  function homeSlider($carousel) {
    if ($carousel.length > 0) {
      $carousel.each(function (index, element) {
        if (!$(element).hasClass('owl-loaded') && $(element).find('.slider-item').length > 1) {
          $(element).addClass('owl-carousel').attr('data-home-slider', +index).owlCarousel({
            items: 1,
            slideBy: 1,
            smartSpeed: 450,
            loop: false,
            lazyLoad: false,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsiveClass: true
          });

        }
      });
    }
  }

  // Coleções Slider
  function colecoesSlider($carousel) {
    if ($carousel.length > 0) {
      $carousel.each(function (index, element) {
        if (!$(element).hasClass('owl-loaded')) {
          var $customNav = $(element).next('.custom-nav');
          $(element).addClass('owl-carousel').attr('data-colecoes-slider', +index).owlCarousel({
            margin: 20,
            smartSpeed: 450,
            loop: false,
            lazyLoad: false,
            dots: false,
            nav: true,
            navContainer: $customNav,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsiveClass: true,
            onInitialized: navSize, //When the plugin has initialized.
            onTranslated: navSize, //When the translation of the stage has finished.
            responsive: {
              0: {
                items: 1,
                slideBy: 1
              },
              640: {
                items: 2,
                slideBy: 2
              },
              1000: {
                items: 4,
                slideBy: 4
              }
            }
          });

        }
      });
    }
  }

  /* init sliders*/
  function initSliders() {
    
    // Home Slider
    homeSlider($homeSlider);
    colecoesSlider($colecoesSlider);
  }

  //sliders
  initSliders();

});//fim load