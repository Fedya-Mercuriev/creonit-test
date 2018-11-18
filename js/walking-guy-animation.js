function WalkingMan() {
	var element =  $('.walking-man-wrapper'),
			guyImg = $(element.children('img')),
			startPosition = 0,
			containerWidth,
			transition,
			_timer;

	 function calcEndPoint() {
		// 262 это размах человечка. Оно вычитается для того, чтобы человечек не залезал за экран
		return element.parent().width() - 262;
	};

	function flipManImage(needsFlip) {
		// Отзеркаливает изображение человечка
		if (needsFlip) {
			guyImg.addClass('walking-man-img--flipped');
		} else {
			guyImg.removeClass('walking-man-img--flipped');
		}
	};

	// Здесь хранится сама функция, которая будет обрабатывать ходьбу
	function walkHandler() {
		// Если человечек стоит в начале, тогда назначаем ему анимацию, которая
		// перенесет его в правую часть экрана
		if (!(currentPosition === containerWidth)) {
			element.animate({
				left: startPosition
			}, (transitionLength * 1000), function() {
				setTimeout(function() {
					flipManImage(true);
				}, transitionLength * 1000)
			});
			currentPosition = containerWidth;
			// Иначе устанавливаем ему анимацию, которая вернет его в левую часть экрана
		} else {
			element.animate({
				left: containerWidth
			}, (transitionLength * 1000), function() {
				setTimeout(function() {
					flipManImage(false);
				}, transitionLength * 1000)
			});
			currentPosition = startPosition;
		}
	};

	function walk(interval) {
		// Обработчик привязывается к таймеру для того, чтобы его можно было написать,
		// но уже с другим значением
		walkHandler();
		_timer = setInterval(walkHandler, interval);
	};

	 function calcTransition(comtainerWidth) {
		// Ниже находится условный эталон - расстояние, которое человечек пройдет за 1 секунду
		var MINIMAL_CONTAINER_WIDTH = 220;
		return (containerWidth / MINIMAL_CONTAINER_WIDTH).toFixed(1);
	};

	function init() {
		// Считаем ширину контейнера
		containerWidth = calcEndPoint();
		// Считаем длительность анимации
		transitionLength = calcTransition(containerWidth);
		currentPosition = startPosition;
		// Начинаем ходьбу
		this.walk(transitionLength);
	};

	this.init = init;
	this.walk = walk;
}

var walkMan = new WalkingMan();
walkMan.init();
