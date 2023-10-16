$(".photo-carousel").slick({
  loop: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".photo-prev"),
  nextArrow: $(".photo-next"),
  swipe: true,
  swipeToSlide: true,
  rtl: true,

  responsive: [
    {
      breakpoint: 990,
      settings: {
        vertical: true,
        verticalSwiping: true,
        rtl: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        // dots: true,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 550,
      settings: {
        vertical: true,
        verticalSwiping: true,
        rtl: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        // dots: true,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],

  // dots: false, Boolean
  // arrows: false, Boolean
});
