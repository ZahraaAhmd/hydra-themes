$(".videos").slick({
  loop: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".vid-prev"),
  nextArrow: $(".vid-next"),
  swipe: true,
  swipeToSlide: true,
  rtl: true,

  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        // arrows: true,
        // dots: true,
        swipe: true,
        swipeToSlide: true,
      },
    },
  ],
});
