var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget('isotope', Isotope, $);

//do jQuery stuff when DOM is ready
$(window).on("load", function () {
  const $body = $('body'), $openFilterBar = $('[data-js-open-filter-bar]'), $filterBar = $('[data-js-filter-bar]');
  if ($('#grid-colecoes').length > 0) {
    // init Isotope
    const $gridPosts = $('#grid-colecoes').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'fitRows',
      fitRows: {
        // columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
      }
    });

    // bind filter button click
    $('.js-filter-colectons').on('click', '.js-filter-button', function () {
      const filterValue = $(this).attr('data-filter');
      $gridPosts.isotope({filter: filterValue});
      $openFilterBar.find('.nav-button-text').text('Filtros');
      $openFilterBar.find('.fas').removeClass('fa-times').addClass('fa-bars');
      $filterBar.removeClass('show-filters');
      $openFilterBar.removeClass('active');
    });

    // change is-checked class on buttons
    $('.js-filter-colectons').each(function (index, element) {
      var $buttonGroup = $(element);
      $buttonGroup.on('click', '.js-filter-button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });

  }



  $openFilterBar.on("click", function (event) {
    $filterBar.toggleClass('show-filters');
    //console.log("default " + event.type + " prevented");
    if ($(this).hasClass('active')) {
      $openFilterBar.find('.nav-button-text').text('Filtros');
      $openFilterBar.find('.fas').removeClass('fa-times').addClass('fa-bars');
      $filterBar.removeClass('show-filters');
      $(this).removeClass('active');
    } else {
      $openFilterBar.find('.nav-button-text').text('Fechar');
      $openFilterBar.find('.fas').removeClass('fa-bars').addClass('fa-times');
      $filterBar.addClass('show-filters');
      $(this).addClass('active');
    }
  });

  // debounce so filtering doesn't happen every millisecond
  function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply(_this, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  }
});