function WalkingMan() {
	this.element =  $('.walking-guy-wrapper'),
	this.guyImg = $(this.element.children('div'));
	this.startPosition = 0,
	this.finalPosition,
	this.currentPosition,
	this.steps,
	this.moveStyle = {
		"transform": "translateX(" + this.currentPosition + ")",
		"-webkit-transform": "translateX(" + this.currentPosition + ")",
		"-ms-transform": "translateX(" + this.currentPosition + ")"
	},

	this.calcEndPoint = function() {
		// 262 это размах человечка. Оно вычитается для того, чтобы человечек не залезал за экран
		this.finalPosition = this.element.parent().width() - 262;
	},

	this.flipManImage = function() {
		// Отзеркаливает изображение человечка
		this.guyImg.toggleClass('walking-guy-img--flipped');
	},

	this.walk = function() {
		steps = this.finalPosition / 4,
		arrived = false;
		setInterval($.proxy(function() {
			this.calcEndPoint();
			if (arrived) {
				this.flipManImage();
				this.currentPosition -= steps;
				if (this.currentPosition <= this.startPosition) {
					arrived = false;
				}
			} else if (!arrived) {
				this.currentPosition += steps;
				if (this.currentPosition >= this.finalPosition) {
					arrived = true;
				}
			}
			this.element.css({"left": this.currentPosition});

		}, this), 1000)

	},

	this.init = function() {
		this.currentPosition = this.startPosition;
		// Сразу переворачиваем изображение человечка, чтоб он смотрел по направлению к финальному пункту
		this.flipManImage();
		this.calcEndPoint();
		this.currentPosition = this.startPosition;
		this.walk();
	}

	// Add init to flip guy at the start
}

var walkMan = new WalkingMan();
walkMan.init();