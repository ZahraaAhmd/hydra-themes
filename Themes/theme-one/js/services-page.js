// next service form in service page in theme 1
$(".service_form .step_btn").on("click", function (e) {
  e.preventDefault();
  $(this).closest("form").addClass("d-none");
  var id = $(this).attr("href");
  $(id).removeClass("d-none");
});

// dropdown
$(".dropdown-menu li a").click(function () {
  $(this).closest(".dropdown").find(".btn span").text($(this).text());
  $(this).closest(".dropdown").find(".btn").addClass("selected");
});
