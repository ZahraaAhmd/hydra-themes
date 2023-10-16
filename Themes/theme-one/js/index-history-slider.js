// history in index theme1
$('.history_content').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    speed: 1000,
    dots: true,
    rtl: true,
    asNavFor: '.history_links',
});

$('.history_links').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.history_content',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    rtl: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }

    }]
}
);
