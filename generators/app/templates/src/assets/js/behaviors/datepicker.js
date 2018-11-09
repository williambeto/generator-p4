import 'foundation-datepicker/js/foundation-datepicker.min';
import 'foundation-datepicker/js/locales/foundation-datepicker.pt-br';

$(window).on("load", function () {
  const $dpTrigger = $('.js-datepicker-trigger');
  const options = {language: 'pt-br'};
  if ($dpTrigger.length > 0) {
    $dpTrigger.fdatepicker(options).on('changeDate', function (ev) {
      console.log(ev.date);
    });
  }
});