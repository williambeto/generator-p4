import 'magnific-popup';
// 
// // -------------------------------------------------------------------------------------------
// Ligthbox activation
// -------------------------------------------------------------------------------------------
$(document).ready(function () {
  $(document).on("click", '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


  $('.popup-modal, .open-popup-link').magnificPopup({
    type: 'inline',
    removalDelay: 150,
    modal: false,
    closeOnBgClick: true,
    mainClass: 'avia-popup mfp-zoom-in',
    fixedContentPos: true,
    imageLoadComplete: function () {
      var self = this;
      setTimeout(function () {
        self.wrap.addClass('mfp-image-loaded');
      }, 16);
    }
  });

  //
  $('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video, .video-gallery-item > a').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'avia-popup mfp-zoom-in',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
    image: {
      tError: '<a href="%url%"> este vídeo </a> foi carregado corretamente :('
    },
    ajax: {
      tError: '<a href="%url%"> este script </a> falhou :('
    },
    callbacks: {
      open: function () {
        //overwrite default prev + next function. Add timeout for css3 crossfade animation
        $.magnificPopup.instance.next = function () {
          var self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(function () {
            $.magnificPopup.proto.next.call(self);
          }, 120);
        };
        $.magnificPopup.instance.prev = function () {
          var self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(function () {
            $.magnificPopup.proto.prev.call(self);
          }, 120);
        };
        //add custom css class for different styling
        if (this.st.el && this.st.el.data('av-extra-class')) {
          this.wrap.addClass(this.currItem.el.data('av-extra-class'));
        }
      },
      imageLoadComplete: function () {
        var self = this;
        setTimeout(function () {
          self.wrap.addClass('mfp-image-loaded');
        }, 16);
      },
      change: function () {
        if (this.currItem.el) {
          var current = this.currItem.el;
          this.content.find('.av-extra-modal-content, .av-extra-modal-markup').remove();
          if (current.data('av-extra-content')) {
            var extra = current.data('av-extra-content');
            this.content.append("<div class='av-extra-modal-content'>" + extra + "</div>");
          }
          if (current.data('av-extra-markup')) {
            var markup = current.data('av-extra-markup');
            this.wrap.append("<div class='av-extra-modal-markup'>" + markup + "</div>");
          }
        }
      }
    }
  });
  var config_galery = {
    type: 'image',
    mainClass: 'avia-popup mfp-zoom-in',
    tLoading: '',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="fas fa-times"></i></button>',
    removalDelay: 300, //delay removal by X to allow out-animation
    closeBtnInside: true,
    closeOnContentClick: false,
    midClick: true,
    fixedContentPos: true, // allows scrolling when lightbox is open but also removes any jumping because of scrollbar removal
    ajax: {
      tError: '<a href="%url%"> este script </a> falhou :('
    },
    image: {
      tError: '<a href="%url%">esta imagem </a> não foi carregada corretamente ou o não existe :(',
      titleSrc: function (item) {
        var title = item.el.attr('title');
        if (!title) {
          title = item.el.find('img').attr('title');
        }
        if (!title) {
          title = item.el.parent().next().html();
        }
        if (typeof title === "undefined") {
          return "";
        }
        return title;
      }
    },
    gallery: {
      // delegate:    options.autolinkElements,
      navigateByImgClick: true,
      tPrev: '',
      tNext: '',
      tCounter: '%curr% / %total%',
      enabled: true,
      preload: [1, 1] // Will preload 1 - before current, and 1 after the current image
    },
    callbacks: {
      beforeOpen: function () {
        //add custom css class for different styling
        //                                    if (this.st.el && this.st.el.data('fixed-content'))
        //                                    {
        //                                        this.fixedContentPos = true;
        //                                    }
      },
      open: function () {
        //overwrite default prev + next function. Add timeout for css3 crossfade animation
        $.magnificPopup.instance.next = function () {
          var self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(function () {
            $.magnificPopup.proto.next.call(self);
          }, 120);
        };
        $.magnificPopup.instance.prev = function () {
          var self = this;
          self.wrap.removeClass('mfp-image-loaded');
          setTimeout(function () {
            $.magnificPopup.proto.prev.call(self);
          }, 120);
        };
        //add custom css class for different styling
        if (this.st.el && this.st.el.data('av-extra-class')) {
          this.wrap.addClass(this.currItem.el.data('av-extra-class'));
        }
      },
      imageLoadComplete: function () {
        var self = this;
        setTimeout(function () {
          self.wrap.addClass('mfp-image-loaded');
        }, 16);
      },
      change: function () {
        if (this.currItem.el) {
          var current = this.currItem.el;
          this.content.find('.av-extra-modal-content, .av-extra-modal-markup').remove();
          if (current.data('av-extra-content')) {
            var extra = current.data('av-extra-content');
            this.content.append("<div class='av-extra-modal-content'>" + extra + "</div>");
          }
          if (current.data('av-extra-markup')) {
            var markup = current.data('av-extra-markup');
            this.wrap.append("<div class='av-extra-modal-markup'>" + markup + "</div>");
          }
        }
      }
    }
  };


  $(window).on("load", function () {

    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });




    //Galerias de Fotos
    $('.popup-gallery').each(function () { // the containers for all your galleries
      $(this).find('a').magnificPopup(config_galery);
    });

    $('.popup-image').magnificPopup(config_galery);


    $('.js-zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function (element) {
          return element.find('img');
        }
      }

    });

  });
});