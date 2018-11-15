function WalkingMan() {
	this.element =  $('.walking-guy-wrapper');
	this.guyImg = $(this.element.children('div'));
	this.startPosition = 0;
	this.containerWidth;
	this.transition;
	this._timer;

	this.calcEndPoint = function() {
		// 262 это размах человечка. Оно вычитается для того, чтобы человечек не залезал за экран
		return this.element.parent().width() - 262;
	};

	this.flipManImage = function() {
		// Отзеркаливает изображение человечка
		if (this.guyImg.hasClass('walking-guy-img--flipped')) {
			this.guyImg.removeClass('walking-guy-img--flipped');
		} else {
			this.guyImg.addClass('walking-guy-img--flipped');
		}
	};

	this.walk = function(interval) {
		// Здесь хранится сама функция, которая будет обрабатывать ходьбу
		var walkHandler = $.proxy(function() {
			this.containerWidth = this.calcEndPoint();
			if (!(this.currentPosition === this.containerWidth)) {
				this.flipManImage();
				this.element.animate({left: this.startPosition}, this.transitionLength * 1000);
				// this.element.css("transitionDuration", this.transition);
				// this.element.css("left", this.containerWidth);
				this.currentPosition = this.containerWidth;
			} else {
				this.flipManImage();
				this.element.animate({left: this.containerWidth}, this.transitionLength * 1000);
				// this.element.css("transitionDuration", this.transition);
				// this.element.css("left", this.startPosition);
				this.currentPosition = this.startPosition;
			}
		}, this);

		// Обработчик привязывается к таймеру для того, чтобы его можно было написать, 
		// но уже с другим значением
		walkHandler();
		setTimeout(function() {
			this._timer = setInterval(walkHandler, interval);
		}, (interval * 1000) * 2);
	};

	this.calcTransition = function(comtainerWidth) {
		// Ниже находится условный эталон - расстояние, которое человечек пройдет за 1 секунду
		var MINIMAL_CONTAINER_WIDTH = 220;
		return (this.containerWidth / MINIMAL_CONTAINER_WIDTH).toFixed(1);
	};

	this.init = function() {
		this.containerWidth = this.calcEndPoint();
		this.transitionLength = this.calcTransition(this.containerWidth);
		// Сразу переворачиваем изображение человечка, чтоб он смотрел по направлению к финальному пункту
		this.flipManImage();
		this.currentPosition = this.startPosition;
		this.walk(this.transitionLength);
	};
}

var walkMan = new WalkingMan();
walkMan.init();

// $(window).resize(function() {
// 	var contWidth = walkMan.calcEndPoint(),
// 		transition = walkMan.calcTransition(contWidth);
// 		walkMan.walk = makeCustomInterval(walkMan, walkMan.walk, transition);
// 		walkMan.walk();
// })

// function makeCustomInterval(ctx, func, interval) {
// 	var self = ctx;
// 	return function() {
// 		setInterval(func.bind(self, arguments), interval);
// 	}
// } 