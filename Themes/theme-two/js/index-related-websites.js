//related websites in index theme2
$(".sites .slider").slick({
  loop: true,
  arrows: false,
  dots: false,
  rtl: true,
  slidesToShow: 4,
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
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: false,
      },
    },
  ],
});
