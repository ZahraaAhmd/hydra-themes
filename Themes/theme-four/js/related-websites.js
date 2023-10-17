$(".related-websites-list").slick({
  loop: true,
  dots: false,
  autoplay: true,
  slidesToShow: 3,
  // slidesToScroll: 3,
  prevArrow: $(".prev-related-website"),
  nextArrow: $(".next-related-website"),
  rtl: true,
  speed: 600,
  Infinity: true,
  variableWidth: true,
  centerMode: true,


  responsive: [
    {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        centerPadding: "15%",
      },
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,


      },
    },
  ],
});
