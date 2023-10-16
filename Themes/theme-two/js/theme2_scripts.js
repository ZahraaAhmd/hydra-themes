//related websites in index theme2
$('.sites .slider').slick({
    loop: true,
    arrows: false,
    dots: false,
    rtl: true,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                rtl: false
            }

        }]

});

// slider in index theme2
$('.main_slider').slick({
    autoplay: true,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-right"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-left"></i></button>',
    slidesToShow: 1,
    speed: 1000,
    dots: true,
    rtl: true
});

// resources page 
$('.files-menu a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').addClass('active').siblings('li').removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('d-none').siblings().addClass('d-none');
});

// service page
$('.services-form .next_btn').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.services-form').addClass('visited d-none');
    $(this).closest('.services-form').next('.services-form').removeClass('d-none').addClass('active').siblings().removeClass('active');
    var id = $('.services-form.active').attr('id');
    $('a[href = "#' + id + '"]').closest('li').addClass('active');
    $('.form-steps li.active').last().addClass('current').siblings().removeClass('current');
});
$('.services-form .back_btn').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.services-form').removeClass('active').addClass('d-none').prev().addClass('active').removeClass('visited d-none');
    var id = $('.services-form.active').attr('id');
    $('a[href = "#' + id + '"]').closest('li').next().removeClass('active');
    $('.form-steps li.active').last().addClass('current').siblings().removeClass('current');
});

