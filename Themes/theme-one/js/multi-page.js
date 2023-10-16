// links content in multi page in theme1
$('.links_content').slick({
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    speed: 1000,
    dots: false,
    rtl: true,
});

$('.pages_link').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.links_content',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    rtl: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }

    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }

    }]
}
);
