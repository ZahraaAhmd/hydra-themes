$(".servicesOptions").slick({
  loop: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  // speed:300,
  autoPlay: true,
  autoplaySpeed:300,
  rtl: true,


  
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    // {
    //   breakpoint: 770,
    //   settings: {
    //     vertical: true,
    //     verticalSwiping: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     rtl: false,
        
    //   },
    // },
    {
  breakpoint: 770,
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
  ],
});

// {
//   breakpoint: 770,
//   settings: {
//     vertical: true,
//     verticalSwiping: true,
//     rtl: false,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     dots: true,
//     swipe: true,
//     swipeToSlide: true,
//   },
// },
