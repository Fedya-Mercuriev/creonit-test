(function() {
	var closeCallbackBtn = $('.close-form-btn'),
			overlay = $('.js-callback-form-overlay'),
			formWrapper = $('.js-callback-form-wrapper');

	overlay.on('click', ".close-form-btn", function(event) {
		overlay.hide();
		formWrapper.hide();
		event.stopPropagation();
	});

	overlay.click('click', function(event) {
		overlay.hide();
		formWrapper.hide();
		event.stopPropagation();
	})
}
)();
