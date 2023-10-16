$(".cards-list").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  rtl: true,
  prevArrow: $(".gov-projects-prev"),
  nextArrow: $(".gov-projects-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
