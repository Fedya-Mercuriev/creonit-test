(function($) {

  function controlSlider() {
    var sliderPrevPage = $('.slider-controls__go-to-prev-offer'),
        sliderNextPage = $('.slider-controls__go-to-next-offer'),
        sliderContainer = $('.slider'),
        containerWidth = $('.slider').width();

        function slideForw() {
          var currentPosition = parseInt(sliderContainer.css("left"));
          currentPosition -= 998;
          sliderContainer.css("left", currentPosition + "px");
          return currentPosition;
        }

        function slidePrev() {
          var currentPosition = parseInt(sliderContainer.css("left"));
          currentPosition += 998;
          sliderContainer.css("left", currentPosition + "px");
          return currentPosition;
        }

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
            sliderContainer.css("left", -20 + "px");
          } else {
            slideForw();
          }
        }

    var _timer = setInterval(function() {
      autoRollSlider();
    },3500);

    sliderNextPage.click(function(e) {
      e.preventDefault();
      if (checkOutOfSliders()) {
        sliderContainer.css("left", -20 + "px");
      } else {
        slideForw();
      }
    })

    sliderPrevPage.click(function(e) {
      e.preventDefault();
      if (getCurrentPosition() >= -20) {
        sliderContainer.css("left", 0 - containerWidth + 928 + "px");
      } else {
        slidePrev();
      }
    })

    // this.sliderTimer = _timer;
    this.sliderPrevPage = sliderPrevPage;
    this.sliderNextPage = sliderNextPage;
  }

  controlSlider();

})(jQuery);
