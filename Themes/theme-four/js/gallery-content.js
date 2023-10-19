$(".gallery-list-slider ").slick({
  loop: true,
  //   dots: false,
  slidesToShow: 5,
//   slidesToScroll: 5,
  Infinity: true,
  arrows: true,
  prevArrow: $(".gallery-prev"),
  nextArrow: $(".gallery-next"),
  rtl: true,
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        centermode:true,
      //  variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".gallery-list2").slick({
  loop: true,
  slidesToShow: 5,
  Infinity: true,
  arrows: true,
  rtl: true,
  prevArrow: $(".gallery-prev"),
  nextArrow: $(".gallery-next"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});