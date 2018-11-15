(function($) {
	//  ПОлучаем контейнеры для названия и формы обратной связи
	var titleContainer = $('.callback-form__title'),
		formContainer = $('.callback-form__content');

	var blockTitle = "<h3>Обратный звонок</h3>";
	// Здесь содержатся все тэги, которые будут добавлены в обертку при нажатии на "заказать звонок"
	var orderCallbackFormData = {
		form: "<form class=\"js-callback-form\" action=\"\" method=\"post\">",
		formLabelName: "<label class=\"js-callback-form__label\">Имя </label>",
		formInputName: "<input class=\"js-callback-form__text-input\" type=\"text\" name=\"name\" value=\"\"></input>",
		formLabelPhone: "<label class=\"js-callback-form__label\">Телефон </label>",
		formInputPhone: "<input class=\"js-callback-form__text-input\" type=\"text\" name=\"phone-number\" value=\"\"></input>",
		privacyPolicyText: "<p class=\"callback-form__privacy-policy\">Мы обещаем не использовать ваш номер телефона без вашего согласия. Мы не будем рассылать смс и звонить без разрешения.</p>",
		submitButton: "<button type=\"submit\" class=\"callback-form__submit-button\">Отправить</button>"
	};

	// Эта функция будет собирать все элементы воедино
	function assembleElements(elementsObj) {
		var result = "";
		for (var key in elementsObj) {
			result += elementsObj[key];
		}
		return result;
	}

	var form = assembleElements(orderCallbackFormData);

	// Добавляем полученные результаты в контейнеры
	titleContainer.html(blockTitle);
	formContainer.html(form);
	
	// Блокируем прокрутку страницы
	blockScroll();
})(jQuery);