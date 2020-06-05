// Dark mode
const mqDark = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const darkModeToggleText = darkModeToggle.querySelector("span");

const bodyTag = document.querySelector("body");

darkModeToggle.addEventListener("click", function() {
  if (bodyTag.classList.contains("dark-mode")) {
    darkModeToggleText.innerHTML = "Light mode";
    gsap.to("g.toggle", {x: 43});
  } else {
    darkModeToggleText.innerHTML = "Dark mode";
    gsap.to("g.toggle", {x: 19});
  }

  const timeline = gsap.timeline();

  timeline
    .set("div.wipe", {height: 0, top: "0%"})
    .to("div.wipe", {height: "100%"})
    .add(function() {
      bodyTag.classList.toggle("dark-mode");
    })
    .to("div.wipe", {height: "0%", top: "100%"});
});

const updateDarkMode = function() {
  if (mqDark.matches) {
    bodyTag.classList.add("dark-mode");
    darkModeToggleText.innerHTML = "Light mode";
    gsap.to("g.toggle", {x: 43});
  } else {
    bodyTag.classList.remove("dark-mode");
    darkModeToggleText.innerHTML = "Dark mode";
    gsap.to("g.toggle", {x: 19});
  }
};

updateDarkMode();
mqDark.addListener(function() {
  updateDarkMode();
});

// Navigation
const menuToggle = document.querySelector("a.menu-toggle");
const menuToggleText = menuToggle.querySelector("span");

menuToggle.addEventListener("click", function() {
  bodyTag.classList.toggle("nav-open");

  if (bodyTag.classList.contains("nav-open")) {
    menuToggleText.innerHTML = "Close";

    // Turning the X
    gsap.to(".burger-top", {rotation: 45, transformOrigin: "50% 50%", y: 8});
    gsap.to(".burger-bottom", {
      rotation: -45,
      transformOrigin: "50% 50%",
      y: -8
    });
    gsap.to(".burger-middle", {
      width: 0
    });
  } else {
    menuToggleText.innerHTML = "Menu";

    gsap.to(".burger-top", {rotation: 0, transformOrigin: "50% 50%", y: 0});
    gsap.to(".burger-bottom", {
      rotation: 0,
      transformOrigin: "50% 50%",
      y: 0
    });
    gsap.to(".burger-middle", {
      width: 28
    });
  }
});

// Spiral
const spiralTimeline = gsap.timeline({
  repeat: -1
});

spiralTimeline
  .set("svg.spiral rect", {rotation: 0, transformOrigin: "50% 50%"})
  .set("svg.spiral rect:nth-child(1)", {rotation: 15})
  .set("svg.spiral rect:nth-child(3)", {rotation: -15})
  .to("svg.spiral rect", {
    rotation: "+=90",
    transformOrigin: "50% 50%",
    duration: 4,
    stagger: -0.25
  });
