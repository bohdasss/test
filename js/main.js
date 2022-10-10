$(function () {
  $('.header__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var mixer = mixitup('.catalog__inner-f', {
    load: {
      filter: '.trail',
    },
    animation: {
      clampWidth: false

    },
  });
});
