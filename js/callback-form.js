(function($) {
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

    function makeForm(elemsObj) {
      let result = "";
      for (let key in elemsObj) {
        if (typeof elemsObj[key] === 'object') {
          result += `<div class="js-callback-form-${key}-wrapper">${makeForm(elemsObj[key])}</div>`;
          continue;
        }
        result += elemsObj[key];
      }
      return result;
    }

    function render() {
      // Соберем форму по частям
      text = makeText(params.textBlock);
      form = `<form class=\"js-callback-form\" action=\"\" method=\"post\">${makeForm(params.form)}</form>`;
      // Присвоим компоненты обертке
      formContent.append(text);
      formContent.append(form);
      // Добавим специальные классы, чтобы отобразить форму
      $('.js-callback-form-overlay').addClass('js-callback-form-overlay--shown');
      $('.js-callback-form-wrapper').removeClass('js-callback-form-wrapper--hidden');
    }

    this.render = render;
  }

  let options = {
    textBlock: {
      title: "<h2 class=\"js-callback-form-title\">Результат расчета веса</h2>",
      paragraph: "<p class=\"js-callback-form-text\"> Похоже, лишний вес вам не грозит. А значит, вам прямая дорога в тренажерный зал — набирать мышечную массу и приобретать эффектные формы. Персональные тренировки помогут выстроить грамотную программу и добиться результатов быстрее. И не забывайте о растяжке после тренировок\!</p>"
    },
    form: {
      radios: {
        labelOne: "<label for=\"radio-one\" class=\"js-callback-form-label-btn\">Записаться на гостевой визит</label>",
        inputOne: "<input id=\"radio-one\" class=\"js-callback-form-radio-input\" name=\"callback-reason\" />",
        labelTwo: "<label for=\"radio-two\" class=\"js-callback-form-label-btn\">Заказать карту</label>",
        inputTwo: "<input id=\"radio-two\" class=\"js-callback-form-radio-input\" name=\"callback-reason\" />"
      },
      textInputs: {
        formLabelName: "<label class=\"js-callback-form-text-label\">Имя </label>",
        formInputName: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"name\" value=\"\"></input>",
        formLabelPhone: "<label class=\"js-callback-form-text-label\">Телефон</label>",
        formInputPhone: "<input class=\"js-callback-form-text-input\" type=\"text\" name=\"phone-number\" value=\"\"></input>"
      },
      privacyPolicyText: "<p class=\"js-callback-form-privacy-policy-text\">Мы обещаем не использовать ваш номер телефона без вашего согласия. Мы не будем рассылать смс и звонить без разрешения.</p>",
      submitButton: "<button type=\"submit\" class=\"js-callback-form-submit-btn\">Отправить</button>"
    }
  };

  let callbackForm = new CallbackForm(options);
  callbackForm.render();
})(jQuery);

// Образец объекта options
