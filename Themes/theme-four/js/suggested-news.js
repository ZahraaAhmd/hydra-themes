$(".sugg-news-list").slick({
  loop: true,
  dots: false,
  slidesToShow: 3,
  // slidesToScroll: 3,
  prevArrow: $(".btn-right-sugg-news"),
  nextArrow: $(".btn-left-sugg-news"),
  rtl: true,
  speed: 600,
  Infinity: true,
  variableWidth: true,
  centerMode: true,


  // responsive: [
  //   {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },

  //   {
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },

  //   {
  //     breakpoint: 550,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
});
