var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);

$(window).on("load", function () {
  const $body = $('body'), $interchange = $('[data-interchange]');
  const $elementsToTrigger = $([$body, $interchange]);

  $elementsToTrigger.each(function (index, element) {
    $(element).imagesLoaded({background: true})
            .always(function (instance) {
              console.log('all images loaded');
            })
            .done(function (instance) {
              console.log('all images successfully loaded');
            })
            .fail(function () {
              console.log('all images loaded, at least one is broken');
            })
            .progress(function (instance, image) {
              var result = image.isLoaded ? 'image-loaded' : 'image-broken';
              console.log('image is ' + result + ' for ' + image.img.src);
              $(element).parent().addClass(result);
            });
  });


});