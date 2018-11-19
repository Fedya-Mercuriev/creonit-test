(function() {
	var $calendarAlert = $('.calendar-icon__alert-icon');

	function getScheduleUpdates() {
	var updateStatus = false;
	// Предположим, эта функция делает запрос на сервер и получает оттуда
	// статус были обновления или нет и возвращает true или false

	// Пусть результат будет случайным
	function getRandomResult(min, max) {
  		let chance = Math.floor(Math.random() * (max - min)) + min;
  		if (chance > max / 2) {
  			return true;
  		}
  		return false;
	}

	updateStatus = getRandomResult(1, 10);
	return updateStatus;
}

	if (getScheduleUpdates()) {
		// Если расписание было обновлено - добавляем класс visible иконке календаря
		$calendarAlert.addClass('calendar-icon__alert-icon--visible');
	} else if ($calendarAlert.hasClass('calendar-icon__alert-icon--visible')) {
		// Если обновление не было, проверяем видима ли alert-иконка у календаря
		// если да, то прячем ее
		$calendarAlert.removeClass('calendar-icon__alert-icon--visible');
		$calendarAlert.addClass('calendar-icon__alert-icon--hidden');
	}
})();
