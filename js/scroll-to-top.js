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
