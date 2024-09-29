// // Import GSAP at the top of your script.js file
// import { gsap } from "gsap";

// // Add this code at the beginning of your script.js file
// window.addEventListener("load", () => {
//   const preloader = document.querySelector(".preloader");
//   const circle = document.querySelector(".loader circle");

//   gsap.to(circle, {
//     strokeDashoffset: 0,
//     duration: 1.5,
//     ease: "power2.inOut",
//   });

//   gsap.to(preloader, {
//     opacity: 0,
//     duration: 0.5,
//     delay: 1.5,
//     onComplete: () => {
//       preloader.style.display = "none";
//     },
//   });
// });

const typed = new Typed(".header__container h1", {
  strings: ["Full-Stack Developer", "Telecommunication Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  contentType: "html",
  attr: null,
  bindInputFocusEvents: false,
  contentType: "html",
  callback: function () {
    null;
  },
  resetCallback: function () {
    null;
  },
  onStringTyped: function () {
    null;
  },
  onLastStringBackspaced: function () {
    null;
  },
  onStart: function () {
    null;
  },
  onComplete: function () {
    null;
  },
  onReset: function () {
    null;
  },
  onTypingPaused: function () {
    null;
  },
  onTypingResumed: function () {
    null;
  },
  onTypingStopped: function () {
    null;
  },
  onDestroy: function () {
    null;
  },
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const downloadCv = document.getElementById("download-cv");

downloadCv.addEventListener("click", (e) => {
  const aElement = document.createElement("a");
  aElement.setAttribute("download", "CV.pdf");
  aElement.setAttribute("href", "/assets/CV.pdf");
  aElement.click();
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const progressBar = document.querySelectorAll(".about__progressbar");

Array.from(progressBar).forEach((bar) => {
  const progress = bar.dataset.progress;
  bar.querySelector("span").style.width = progress + "%";
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .about__progress", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

const tabList = document.querySelector(".resume__tablist");

tabList.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  const tabs = document.querySelectorAll("[data-tab]");
  Array.from(tabs).forEach((tab) => {
    if (tab.dataset.tab === tabIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const activePanel = document.querySelector(".panel__grid.active");
  const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
  if (activePanel.dataset.panel === tabIndex) return;
  activePanel.classList.add("close");
  activePanel.addEventListener(
    "animationend",
    (e) => {
      activePanel.classList.remove("active");
      activePanel.classList.remove("close");
      toActivePanel.classList.add("active");
    },
    { once: true }
  );
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});
