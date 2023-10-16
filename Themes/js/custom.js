$(function () {
    let url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
    $('.navbar .nav-link').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
            return false;
        }
    });

  /*----------------------------------
  *   SEARCH RESOURCES CATEGORY
  * ---------------------------------*/
    $(document).on('keyup', '#search_resource_field', function () {
        let searchText = $(this).val();
        let allWidgets = $('.available-resource-categories li > a');
        $.each(allWidgets, function (index, value) {
            let text = $(this).text();
            let found = text.toLowerCase().match(searchText.toLowerCase().trim());
            if (!found) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        });
    });
});

// hide slick-prev
$('.slick-prev').css('display','none')