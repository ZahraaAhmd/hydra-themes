$(".services_list .slider").slick({
  loop: true,
  arrows: true,
  dots: false,
  rtl: true,
  slidesToShow: 5,
  prevArrow: false,
  nextArrow: $(".more"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: false,
      },
    },
  ],
});
