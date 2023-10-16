// resources page
$(".files-menu a").on("click", function (e) {
  e.preventDefault();
  $(this).closest("li").addClass("active").siblings("li").removeClass("active");
  var id = $(this).attr("href");
  $(id).removeClass("d-none").siblings().addClass("d-none");
});
