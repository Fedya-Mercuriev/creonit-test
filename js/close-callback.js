(function($) {

	var callbackForm = {
		overlay: $('.callback-form-overlay'),
		formWrapper: $('.callback-form-wrapper'),
		callbackTitle: "Обратный звонок",
		closeModalButton: $('.close-form-btn'),
		orderCallbackFormData: {
			form: "<form class=\"js-callback-form\" action=\"\" method=\"post\">",
			formLabelName: "<label class=\"js-callback-form__label\">Имя </label>",
			formInputName: "<input class=\"js-callback-form__text-input\" type=\"text\" name=\"name\" value=\"\"></input>",
			formLabelPhone: "<label class=\"js-callback-form__label\">Телефон </label>",
			formInputPhone: "<input class=\"js-callback-form__text-input\" type=\"text\" name=\"phone-number\" value=\"\"></input>",
			privacyPolicyText: "<p class=\"callback-form__privacy-policy\">Мы обещаем не использовать ваш номер телефона без вашего согласия. Мы не будем рассылать смс и звонить без разрешения.</p>",
			submitButton: "<button type=\"submit\" class=\"callback-form__submit-button\">Отправить</button>"
	    },

	    assembleElements: function(elementsObj) {
	    	elementsObj = elementsObj || this.orderCallbackFormData;
	    	var result = "";
			for (var key in elementsObj) {
				result += elementsObj[key];
			}
			return result;
	    },

	    blockWindowScroll: function() {
	    	$('body').addClass('block-scroll');
	    },

	    render: function() {
	    	
	    	var form = this.assembleElements(orderCallbackFormData);
			// Добавляем полученные результаты в контейнеры
			this.titleContainer.html(blockTitle);
			this.formContainer.html(form);
	    },

	    closeModal

	}
	
	var closeModalActions = {
		onClickOverlay = function() {
			var callbackForm = $('callback-form-wrapper');
			this.removeClass('callback-form-overlay--shown');
		}
	}

	function closeCallbackForm() {
		var callbackForm = $('callback-form-wrapper');
		callbackForm.addClass('')
	}
})(jQuery);