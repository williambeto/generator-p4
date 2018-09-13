$(window).on("load", function () {
  const $loading = $('[data-js-loading]'),
          $body = $('body'),
          $interchange = $('[data-interchange]'),
          $equalizer = $('[data-equalizer]');


  //Foundation init
  $(document).foundation();

  //foundation version
  console.log("Foundation version:" + Foundation.version);

  if ($loading.length > 0) {
    $loading.fadeOut("slow", function () {
      $body.addClass('loaded');
    });
  } else {
    $body.addClass('loaded');
  }

  // Foundation interchange reflow
  $(window).on('changed.zf.mediaquery', function (event, newSize, oldSize) {
    if ($interchange.length > 0) {
      $interchange.filter('[data-interchange]').foundation('_reflow');
    }
    if ($equalizer.length > 0) {
      $equalizer.filter('[data-equalizer]').foundation('_reflow');
    }
  });
  
});