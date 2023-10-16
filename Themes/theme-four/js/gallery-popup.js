$(document).ready(function () {
    // Sliders
    //// Slider Top
    $('.js-items-slider-container .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        rtl: true,
        asNavFor: '.js-items-slider-container .slider-nav'
    });


    // when click on eye icon show the items-slider-container
    $('.single_gallary  .img_container .eye-icon').on('click', function () {
        $('.js-items-slider-container').show();
        $(".slider-for").slick("refresh");
        $(".slider-nav").slick("refresh");
        $('.gallery-header-container').hide();
        $('.gallery-wrapper').hide();
        $('.page_content').addClass('page_content-slider-active');
        $('.page-mask').show();

        $('.js-items-slider-container .close_btn').on('click', function () {
            $(this).closest('.js-items-slider-container').hide();
            $('.page-mask').hide();
            $('.gallery-header-container').show();
            $('.gallery-wrapper').show();

        });

    });

    // when ESCAPE key pressed close the slider
    $(document).keydown(function (e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $('.js-items-slider-container').hide();
            $('.page-mask').hide();
            $('.gallery-header-container').show();
            $('.gallery-wrapper').show();
            $('.page_content').removeClass('page_content-slider-active');
        }
    });

    // // when click on the mask close the slider
    $('.page-mask').on('click', function () {
        $('.js-items-slider-container').hide();
        $('.page-mask').hide();
        $('.gallery-header-container').show();
        $('.gallery-wrapper').show();
        $('.page_content').removeClass('page_content-slider-active');
    });


    $('.js-items-slider-container .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container .slider-for',
        rtl: true,
        // dots: true,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-left"></i></button>',
        accessibility: true,
        // variableWidth: true,
        onAfterChange: function (slide, index) {
            console.log("slider-nav change");
            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });
});