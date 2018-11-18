(function() {
	var closeCallbackBtn = $('.close-form-btn'),
			overlay = $('.js-callback-form-overlay'),
			formWrapper = $('.js-callback-form-wrapper');

	function cleaFormContent() {
		var formContent = $('.js-callback-form-content');
		formContent.empty();
	}

// Удаляем форму при нажатии на крестик фон
	overlay.on('click', ".close-form-btn", function(event) {
		// Очищаем форму
		cleaFormContent()
		// Прячем ее
		overlay.removeClass('js-callback-form-overlay--shown');
		formWrapper.addClass('js-callback-form-wrapper--hidden');
		// Разблокируем скроллинг
		$('body').removeClass('block-scroll');
		event.stopPropagation();
	});

// Удаляем форму при нажатии на затемненный фон
	overlay.click('click', function(event) {
		// Очищаем форму
		cleaFormContent()
		// Прячем ее
		overlay.removeClass('js-callback-form-overlay--shown');
		formWrapper.addClass('js-callback-form-wrapper--hidden');
		// Разблокируем скроллинг
		$('body').removeClass('block-scroll');
		event.stopPropagation();
	})
}
)();
