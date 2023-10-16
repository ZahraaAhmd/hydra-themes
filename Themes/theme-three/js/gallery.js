// $(document).ready(function () {
//   $(".center-slider").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     arrows: true,
//     prevArrow: $(".gallery-next"),
//     nextArrow: $(".gallery-prev"),
//     dots: false,
//     // speed: 300,
//     // centerPadding: "20px",
//     // infinite: true,
//     // autoplaySpeed: 5000,
//     // autoplay: true,
//     rtl: true,
//     variableWidth: true,
//   });
// });

$(".center").slick({
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  speed: 500,
  variableWidth: true,
  rtl: true,
  prevArrow: $(".gallery-next"),
  nextArrow: $(".gallery-prev"),
});
$(".center").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    console.log("beforeChange", currentSlide, nextSlide);
  }
);
$(".center").on("afterChange", function (event, slick, currentSlide) {
  console.log("afterChange", currentSlide);
});

$(".videos-gallery").slick({
  loop: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".vid-gallery-prev"),
  nextArrow: $(".vid-gallery-next"),
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
