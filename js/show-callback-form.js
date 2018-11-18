(function($) {
  var $orderPhoneCallBtn = $('.contact-info-list__link-order-phone-call-btn'),
      $calculateBodyShape = $('.submit-btn');

      function styleCallbackRadios() {
        var $inputsContainer = $('.js-callback-form-radios-wrapper'),
            $buttons = $inputsContainer.contents().filter('label');

        $inputsContainer.on('click', 'label', function(event) {
          event.stopPropagation();
          $(event.target).addClass('js-callback-form-label-btn--is-checked');
          $.each($buttons, function(key) {
            if ($buttons[key] != event.target) {
              $buttons[key].classList.remove('js-callback-form-label-btn--is-checked');
            }
          });
        })
      }


  $calculateBodyShape.click(function(event) {
    event.preventDefault();
    var calcBodyTypeCallback = new CallbackForm(calcBodyTypeFormParams);
    calcBodyTypeCallback.render();
    blockScroll();
    styleCallbackRadios();
  });

  $orderPhoneCallBtn.click(function(event) {
    event.preventDefault();
    var callbackForm = new CallbackForm(orderPhoneCallForm);
    callbackForm.render();
    blockScroll();
  })
})(jQuery);
