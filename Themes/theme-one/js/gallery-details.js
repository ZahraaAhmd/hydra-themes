// gallary details in theme1
$(".main_gallary").slick({
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  speed: 1000,
  dots: false,
  rtl: true,
  variableWidth: true,
  centerMode: true,
});

$(".thumbnail_gallary").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: ".main_gallary",
  arrows: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-right"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-left"></i></button>',
  focusOnSelect: true,
  centerMode: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".gallary_album .count").on("click", function () {
  // $(".gallary_popup").show();
  // $(".page-mask").show();
  // $(".main_gallary").slick("refresh");
  // $(".thumbnail_gallary").slick("refresh");
});

$(".gallary_popup .close_btn").on("click", function () {
  // $(this).closest(".gallary_popup").hide();
  // $(".page-mask").hide();
});
