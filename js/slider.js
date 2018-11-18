(function($) {

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

})(jQuery);
