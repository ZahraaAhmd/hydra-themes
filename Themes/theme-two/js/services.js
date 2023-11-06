// service page
$(".services-form .next_btn:not(.finish)").on("click", function (e) {
  e.preventDefault();
  $(this).closest(".services-form").addClass("visited d-none");
  $(this)
    .closest(".services-form")
    .next(".services-form")
    .removeClass("d-none")
    .addClass("active")
    .siblings()
    .removeClass("active");
  var id = $(".services-form.active").attr("id");
  $('a[href = "#' + id + '"]')
    .closest("li")
    .addClass("active");
  $(".form-steps li.active")
    .last()
    .addClass("current")
    .siblings()
    .removeClass("current");
});
$(".services-form .back_btn").on("click", function (e) {
  e.preventDefault();
  $(this)
    .closest(".services-form")
    .removeClass("active")
    .addClass("d-none")
    .prev()
    .addClass("active")
    .removeClass("visited d-none");
  var id = $(".services-form.active").attr("id");
  $('a[href = "#' + id + '"]')
    .closest("li")
    .next()
    .removeClass("active");
  $(".form-steps li.active")
    .last()
    .addClass("current")
    .siblings()
    .removeClass("current");
});
