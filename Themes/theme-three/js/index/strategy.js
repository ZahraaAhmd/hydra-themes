$(".strategies-list").slick({
  rtl: true,
  prevArrow: $(".strategy-prev"),
  nextArrow: $(".strategy-next"),





  responsive: [
    {
      breakpoint: 770,
      settings: {
        // horizontal: true,
        // verticalSwiping: true,
        // rtl: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        swipe: true,
        swipeToSlide: true,
        rtl: true,
      },
    },
  ],
});
