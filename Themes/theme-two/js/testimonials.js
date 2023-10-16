$(".testimonials-list").slick({
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 2000,
    dots: true,
    rtl: true,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        
    }]
});
