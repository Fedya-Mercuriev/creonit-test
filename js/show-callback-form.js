(function($) {
  var $orderPhoneCallBtn = $('.contact-info-list__link-order-phone-call-btn'),
      $calculateBodyShape = $('.submit-btn');

// Т.к стили css не применяются к динамически созданным элементам (?), создадим
// функцию, которая будет слушать клики у радиокнопок и красить их в соответствущие
// цвета, чтобы показать их состояние
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

// Этот обработчик отвечает за отображение модалки после подсчета своего типа
// телосложения
  $calculateBodyShape.click(function(event) {
    event.preventDefault();
    var calcBodyTypeCallback = new CallbackForm(calcBodyTypeFormParams);
    calcBodyTypeCallback.render();
    blockScroll();
    styleCallbackRadios();
  });

// Этот обработчик вызывает форму дял заказа обратного звонка
  $orderPhoneCallBtn.click(function(event) {
    event.preventDefault();
    var callbackForm = new CallbackForm(orderPhoneCallForm);
    callbackForm.render();
    blockScroll();
  })
})(jQuery);
