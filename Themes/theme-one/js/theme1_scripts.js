// // related website sections in index theme1 tablet view
// $('.related_sites .slider').slick({
//     autoplay: true,
//     arrows: false,
//     slidesToShow: 3,
//     speed: 1000,
//     dots: false,
//     rtl: true,
// });

// // slider in index theme1
// $('.main_slider').slick({
//     autoplay: true,
//     arrows: true,
//     prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-right"></i></button>',
//     nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-left"></i></button>',
//     slidesToShow: 1,
//     speed: 1000,
//     dots: true,
//     rtl: true
// });

// //services in index desktop and tablet theme1
// $('.services_list .slider').slick({
//     loop: true,
//     arrows: false,
//     dots: false,
//     rtl: true,
//     slidesToShow: 5,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//             }
//         },
//         {
//             breakpoint: 767,
//             settings: {
//                 vertical: true,
//                 verticalSwiping: true,
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 rtl: false
//             }

//         }]

// });

// // history in index theme1
// $('.history_content').slick({
//     autoplay: true,
//     arrows: false,
//     slidesToShow: 1,
//     speed: 1000,
//     dots: true,
//     rtl: true,
// });

// $('.history_links').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.history_content',
//     dots: false,
//     arrows: false,
//     centerMode: false,
//     focusOnSelect: true,
//     rtl: true,
//     responsive: [{
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         }

//     }]
// }
// );

// // next service form in service page in theme 1
// $('.service_form .step_btn').on('click', function (e) {
//     e.preventDefault();
//     $(this).closest('form').addClass('d-none');
//     var id = $(this).attr('href');
//     $(id).removeClass('d-none');
// });

// // dropdown
// $(".dropdown-menu li a").click(function () {
//     $(this).closest('.dropdown').find(".btn span").text($(this).text());
//     $(this).closest('.dropdown').find(".btn").addClass('selected');
// });


// // links content in multi page in theme1
// $('.links_content').slick({
//     autoplay: false,
//     arrows: false,
//     slidesToShow: 1,
//     speed: 1000,
//     dots: false,
//     rtl: true,
// });

// $('.pages_link').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: '.links_content',
//     dots: false,
//     arrows: false,
//     centerMode: true,
//     focusOnSelect: true,
//     rtl: true,
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//         }

//     },
//     {
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//         }

//     }]
// }
// );

// // gallary details in theme1
// $('.main_gallary').slick({
//     autoplay: false,
//     arrows: false,
//     slidesToShow: 1,
//     speed: 1000,
//     dots: false,
//     rtl: true,
//     variableWidth: true,
//     centerMode: true,
// });

// $('.thumbnail_gallary').slick({
//     slidesToShow: 7,
//     slidesToScroll: 1,
//     asNavFor: '.main_gallary',
//     arrows: true,
//     prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-right"></i></button>',
//     nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-left"></i></button>',
//     focusOnSelect: true,
//     centerMode: true,
//     rtl: true,
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//         }
//     },
//     {
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//         }

//     }]
// }
// );

// $('.gallary_album .count').on('click', function () {
//     $('.gallary_popup').show();
//     $('.page-mask').show();
//     $(".main_gallary").slick("refresh");
//     $(".thumbnail_gallary").slick("refresh");

// });

// $('.gallary_popup .close_btn').on('click', function () {
//     $(this).closest('.gallary_popup').hide();
//     $('.page-mask').hide();
// });


