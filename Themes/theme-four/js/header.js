/* const sectionHero = document.querySelector(".heros-list");
console.log(sectionHero);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log(ent);

      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      console.log(ent);

      document.body.classList.remove("sticky");
    }
  },
  {
    // that means we will observe the hero section inside the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
 */
$(document).ready(function() {
$(window).bind('scroll', function() {
  if ($(window).scrollTop() >200) {
      $("header nav").addClass("navbar-sticky");
  }
  if ($(window).scrollTop() > 250) {
      $(".navbar-sticky").addClass("sticky-active");
  } else if ($(window).scrollTop() < 300) {
      $("header nav").removeClass("navbar-sticky sticky-active");
  }
});
})