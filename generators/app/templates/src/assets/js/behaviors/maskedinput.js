import 'jquery.maskedinput/src/jquery.maskedinput';

//do jQuery stuff when DOM is ready
$(function () {
  const $phoneMask = $('[type="tel"]'),
          $dateMask = $('.date-mask, .js-datepicker-trigger'),
          $cpfMask = $('.cpf-mask'),
          $cepMask = $('.cep-mask');
          
  if ($phoneMask.length > 0) {
    $phoneMask.mask('(99) 99999-999?9');
  }
  
  if ($dateMask.length > 0) {
    $dateMask.mask('99/99/9999');
  }
  
  if ($cpfMask.length > 0) {
    $cpfMask.mask('999.999.999-99');
  }
  
  if ($cepMask.length > 0) {
    $cepMask.mask('99999-999');
  }
  
});