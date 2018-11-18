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
  };
