(function($) {
  var $orderPhoneCallBtn = $('.contact-info-list__link-order-phone-call-btn'),
      $calculateBodyShape = $('.submit-btn');

  $calculateBodyShape.click(function(event) {
    event.preventDefault();
    var calcBodyTypeCallback = new CallbackForm(calcBodyTypeFormParams);
    calcBodyTypeCallback.render();
    blockScroll();
  });

  $orderPhoneCallBtn.click(function(event) {
    event.preventDefault();
    var callbackForm = new CallbackForm(orderPhoneCallForm);
    callbackForm.render();
    blockScroll();
  })
})(jQuery);
