const allSections = document.querySelectorAll(".section");
console.log(allSections);

const revealSections = function (entries, observer) {
  const [entry] = entries;

  // Guard Clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  // To stop the observer to observe over all the sections after all the target
  // sections had been revealed.
  observer.unobserve(entry.target);
};

const revealOptions = {
  root: null, // Viewport
  threshold: 0.15,
  // 0.15 means when the  target element  ( entry.target) AKA section  is 15% visible
  // on our viewport (intersecting element), the callback function revealSections()
  // will be invoked
};

const sectionObserver = new IntersectionObserver(revealSections, revealOptions);

// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// navbar toggle
const nav = document.querySelector(".main-nav-header");
const navBtn = document.querySelector(".navbar-toggler");

console.log(navBtn);
console.log(nav);

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// getting the body to toggle scroll when nav is open
const bodyEl = document.querySelector("body");
console.log(navBtnEl);
console.log(headerEl);

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  // toggle scroll when nav is open
  // bodyEl.classList.toggle("no-scroll");
});

// Sticky Navigation

const sectionHeroEL = document.querySelector(".hero-container");
const notification = document.querySelector(".notification_nav");
const searchFormEl = document.querySelector(".searchAtNav");
console.log("search results wrapper", searchFormEl);
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log(ent);

      document.body.classList.add("sticky");
      searchFormEl.classList.add("stickySearch");
    }
    if (ent.isIntersecting === true) {
      console.log(ent);

      document.body.classList.remove("sticky");
      searchFormEl.classList.remove("stickySearch");
    }
  },
  {
    // that means we will observe the hero section inside the view port
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

//obs.observe(sectionHeroEL);

var btn = $(".button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});


$(document).ready(function() {
  $(window).bind('scroll', function() {
   
    if ($(window).scrollTop() > 250) {
      
      $("body").addClass("sticky");
     $(".searchAtNav").addClass("stickySearch");
    }
     else  {
      $("body").removeClass("sticky");
     $(".searchAtNav").removeClass("stickySearch");
    }
  });
  })