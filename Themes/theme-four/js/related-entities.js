$(".logos").slick({
  speed: 3500,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  rtl: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
