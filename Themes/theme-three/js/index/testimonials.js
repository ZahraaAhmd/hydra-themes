// $(".testimonials").slick({
//   loop: true,
//   dots: false,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   // arrows: true,
//   // autoplay: true,
//   // autoplaySpeed: 2000,
//   // appendArrows: $(".testimonialsActions"),

//   responsive: [
//     {
//       breakpoint: 950,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,

//       },
//     },
//     {
//       breakpoint: 650,
//       settings: {
//         vertical: true,
//         verticalSwiping: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         rtl: false,
//         prevArrow: $(".testimonial-prev"),
//         nextArrow: $(".testimonial-next"),
//       },
//     },
//   ],
// });

$(".testimonials").slick({
  // loop: true,
  // Infinity: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 1000,
  prevArrow: $(".testimonial-prev"),
  nextArrow: $(".testimonial-next"),
  // arrows: false,
  rtl: true,

  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        // horizontal: true,
        // verticalSwiping: true,
        rtl: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        swipe: true,
        swipeToSlide: true,
        rtl:true,
      },
    },
  ],
});
