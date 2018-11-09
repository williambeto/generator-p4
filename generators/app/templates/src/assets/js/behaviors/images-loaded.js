const imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);

$(window).on("load", function () {
  const $body = $('body'), $interchange = $('[data-interchange]');
  const $elementsToTrigger = $([$body, $interchange]);

  $elementsToTrigger.each(function (index, element) {
    $(element).imagesLoaded({background: '[data-interchange]'})
            .always(function (instance) {
              //console.log('all images loaded');
            })
            .done(function (instance) {
              //console.log('all images successfully loaded');
            })
            .fail(function () {
              //console.log('all images loaded, at least one is broken');
            })
            .progress(function (instance, image) {
              let $item = $(image.element) ? $(image.element) : $(image.img).parent();
              let result = image.isLoaded ? 'image-is-loaded' : 'image-is-broken';

              if (image.isLoaded) {
                if ($(image.element)) {
                  $(image.element).addClass('is-loaded');
                }
                if ($(image.img)) {
                  $(image.img).parent().addClass('is-loaded');
                }
              }
            });
  });
});