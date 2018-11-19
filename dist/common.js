(function() {
	var calcBodyTypeFormParams = {
	  textBlock: {
	    title: "<h2 class=\"js-callback-form-title\">Результат расчета веса</h2>",
	    paragraph: "<p class=\"js-callback-form-text\"> Похоже, лишний вес вам не грозит. А значит, вам прямая дорога в тренажерный зал — набирать мышечную массу и приобретать эффектные формы. Персональные тренировки помогут выстроить грамотную программу и добиться результатов быстрее. И не забывайте о растяжке после тренировок\!</p>"
	  },
	  form: {
	    radios: {
	      inputOne: "<input id=\"callback-reason-radio-one\" class=\"js-callback-form-radio-input\" name=\"callback-reason\" checked/>",
	      labelOne: "<label for=\"callback-reason-radio-one\" class=\"js-callback-form-label-btn\">Записаться на гостевой визит</label>",
	      inputTwo: "<input id=\"callback-reason-radio-two\" class=\"js-callback-form-radio-input\" name=\"callback-reason\" />",
	      labelTwo: "<label for=\"callback-reason-radio-two\" class=\"js-callback-form-label-btn\">Заказать карту</label>"
	    },
	    textInputs: {
	      formLabelName: "<label class=\"js-callback-form-text-label\">Имя </label>",
	      formInputName: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"name\" value=\"\" required></input>",
	      formLabelPhone: "<label class=\"js-callback-form-text-label\">Телефон</label>",
	      formInputPhone: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"phone-number\" value=\"\" required></input>",
	    },
	    privacyPolicyText: "<p class=\"js-callback-form-privacy-policy-text\">Мы обещаем не использовать ваш номер телефона без вашего согласия. Мы не будем рассылать смс и звонить без разрешения.</p>",
	    submitButton: "<button type=\"submit\" class=\"js-callback-form-submit-btn\">Отправить</button>"
	  }
	},
	orderPhoneCallForm = {
	  textBlock: {
	    title: "<h2 class=\"js-callback-form-title\">Обратный звонок</h2>"
	  },
	  form: {
	    textInputs: {
	      formLabelName: "<label class=\"js-callback-form-text-label\">Имя </label>",
	      formInputName: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"name\" value=\"\" required></input>",
	      formLabelPhone: "<label class=\"js-callback-form-text-label\">Телефон</label>",
	      formInputPhone: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"phone-number\" value=\"\" required></input>"
	    },
	    privacyPolicyText: "<p class=\"js-callback-form-privacy-policy-text\">Мы обещаем не использовать ваш номер телефона без вашего согласия. Мы не будем рассылать смс и звонить без разрешения.</p>",
	    submitButton: "<button type=\"submit\" class=\"js-callback-form-submit-btn\">Отправить</button>"
	  }
	};

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

	// Функция блокирует прокрутку экрана при вызове формы

	function blockScroll() {
		$('body').addClass('block-scroll');
	}

	  function CallbackForm(options) {
	    let form,
	        overlay,
	        text,
	        formContent = $('.js-callback-form-content'),
	        params = options;

	// Создаем текстовый блок
	    function makeText(elemsObj) {
	      let result = "";
	      for (let key in elemsObj) {
	        result += elemsObj[key];
	      }
	      return result;
	    }

	// Сборщик формы
	    function makeForm(elemsObj) {
	      let result = "";
	      for (let key in elemsObj) {
	        if (typeof elemsObj[key] === 'object') {
	          result += "<div class=\"js-callback-form-" + key + "-wrapper\">" + makeForm(elemsObj[key]) + "</div>";
	          continue;
	        }
	        result += elemsObj[key];
	      }
	      return result;
	    }

	    function render() {
	      // Соберем форму по частям
	      text = makeText(params.textBlock);
	      form = "<form class=\"js-callback-form\" action=\"\" method=\"post\">" + makeForm(params.form) + "</form>";
	      // Присвоим компоненты обертке
	      formContent.append(text);
	      formContent.append(form);
	      // Добавим специальные классы, чтобы отобразить форму
	      $('.js-callback-form-overlay').addClass('js-callback-form-overlay--shown');
	      $('.js-callback-form-wrapper').removeClass('js-callback-form-wrapper--hidden');
	    }

	    this.render = render;
	  };

	(function() {
		function CaloriesAndSteps () {
			this.caloriesElem = $('.js-calories-burnt'),
			this.distanceElem = $('.js-walk-distance'),
			this.calories = 0,
			this.distance = 0,
			this.calculateDistance = function() {
				this.distance += 1;
			},
			this.calculateCalories = function() {
				this.calories += 0.9;
			},
			this.render = function() {
				setInterval($.proxy(function() {
					this.calculateDistance();
					this.calculateCalories();
					this.caloriesElem.html(this.calories.toFixed(1));
					this.distanceElem.html(this.distance);
				}, this), 1000)
			}
		}

		var calsAndMetrsTabloid = new CaloriesAndSteps();
		calsAndMetrsTabloid.render();
	})();

	(function() {
		var closeCallbackBtn = $('.close-form-btn'),
				overlay = $('.js-callback-form-overlay'),
				formWrapper = $('.js-callback-form-wrapper');

		function cleaFormContent() {
			var formContent = $('.js-callback-form-content');
			formContent.empty();
		}

	// Удаляем форму при нажатии на крестик
		formWrapper.on('click', '.close-form-btn', function(event) {
			cleaFormContent();
			overlay.removeClass('js-callback-form-overlay--shown');
			formWrapper.addClass('js-callback-form-wrapper--hidden');
			$('body').removeClass('block-scroll');
		})
	// Удаляем форму при нажатии на затемненный фон
		overlay.click(function(event) {
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

	(function() {
	  var scrollTopBtn = $('.scroll-to-top-button');
	  // Спрячем кнопку и покажем только тогда, когда половина страницы уже была
	  // проскроллена

	  function scrollTrack() {
	    var y = $(document).scrollTop();
	    if (y > 1000) {
	      scrollTopBtn.removeClass('scroll-to-top-button--hidden');
	    } else {
	      scrollTopBtn.addClass('scroll-to-top-button--hidden');
	    }
	  };

	  // Прикрутим обработчик кликов, который будет возвращать ползователя на верх
	  // страницы, если тот кликнет по кнопке "вверх"
	  scrollTopBtn.click(function(event) {
	    event.preventDefault();
	    $("html, body").animate({ scrollTop: 0 }, "fast");
	    return false;
	  })

	  $(document).scroll(scrollTrack);
	})();

	(function() {
	  var $orderPhoneCallBtn = $('.contact-info-list__link-order-phone-call-btn'),
	      $calculateBodyShape = $('.submit-btn');

	// Т.к стили css не применяются к динамически созданным элементам (?), создадим
	// функцию, которая будет слушать клики у радиокнопок и красить их в соответствущие
	// цвета, чтобы показать их состояние
	      function styleCallbackRadios() {
	        var $inputsContainer = $('.js-callback-form-radios-wrapper'),
	            $buttons = $inputsContainer.contents().filter('label'),
	            firstlaunch = true;

	        if (firstlaunch) {
	          $buttons.eq(0).addClass('js-callback-form-label-btn--is-checked');
	        }

	        $inputsContainer.on('click', 'label', function(event) {
	          event.stopPropagation();
	          if (firstlaunch) {
	            $(event.target).removeClass('js-callback-form-label-btn--is-checked');
	          }
	          $(event.target).addClass('js-callback-form-label-btn--is-checked');
	          $.each($buttons, function(key) {
	            if ($buttons[key] != event.target) {
	              $buttons[key].classList.remove('js-callback-form-label-btn--is-checked');
	            }
	          });
	        })
	        firstlaunch = false;
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
	})();

	(function() {

	  function controlSlider() {
	    var sliderPrevPage = $('.slider-controls__go-to-prev-offer'),
	        sliderNextPage = $('.slider-controls__go-to-next-offer'),
	        sliderContainer = $('.slider'),
	        containerWidth = $('.slider').width(),
	        _timer,
	        delay = 4800;

	    function slideForw() {
	      var currentPosition = parseInt(sliderContainer.css("left"));
	      currentPosition -= 998;
	      sliderContainer.css("left", currentPosition + "px");
	      console.log(currentPosition);
	    }

	    function slidePrev() {
	      var currentPosition = parseInt(sliderContainer.css("left"));
	      currentPosition += 998;
	      sliderContainer.css("left", currentPosition + "px");
	      console.log(currentPosition);
	    }

	        // Эта функция проверяет есть ли еще слайды дальше
	    function checkOutOfSliders() {
	      if (getCurrentPosition() <= 0 - containerWidth + 928) {
	        return true;
	      }
	      return false;
	    }

	    function getCurrentPosition() {
	      return parseInt(sliderContainer.css("left"));
	    }

	    function autoRollSlider() {
	      if (checkOutOfSliders()) {
	        console.log("Вернулись на: -20 px");
	        sliderContainer.css("left", -20 + "px");
	      } else {
	        slideForw();
	      }
	    }

	    function throttleAutoscroll(func, delay) {
	      return setTimeout(func, delay);
	    }

	    _timer = setInterval(function() {
	      autoRollSlider();
	    }, delay);

	    sliderNextPage.click(function(e) {
	      e.preventDefault();
	      clearInterval(_timer);
	      if (checkOutOfSliders()) {
	        sliderContainer.css("left", -20 + "px");
	        sliderContainer.css("left", -20 + "px");
	      } else {
	        slideForw();
	      }
	      _timer = setInterval(autoRollSlider, delay);
	    })

	    sliderPrevPage.click(function(e) {
	      e.preventDefault();
	      clearInterval(_timer);
	      if (getCurrentPosition() >= -20) {
	        sliderContainer.css("left", 0 - containerWidth + 928 + "px");
	        // sliderContainer.css("left", -20 + "px");
	      } else {
	        slidePrev();
	      }
	      _timer = setInterval(autoRollSlider, delay);
	    })

	    this.sliderPrevPage = sliderPrevPage;
	    this.sliderNextPage = sliderNextPage;
	  }

	  controlSlider();

	})();

	(function() {
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
	})()
})();
