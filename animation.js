// import anime from "anime.min.js";

// const topIcon = document.getElementById("top-icon");
const scrollToContentButton = document.getElementById("scroll-to-content-button");
const scrollToTopButton = document.getElementById("scroll-to-top-button");
const splashBackgroundColors = ["#000000", "#ff0000", "#0000ff", "#ffdd00", "#f000a0", "#f09000", "#00ee00"];
const ANIMATION_DELAY_TIME = 4000;
// const anime = require("animejs");
let index = 0;

// topIcon.addEventListener("click", () => {
//   document.documentElement.style.setProperty("--splash-background-color", splashBackgroundColors[index = ++index % splashBackgroundColors.length]);
// });

scrollToContentButton.addEventListener("click", () => {
  scrollToElement("content");
});

scrollToTopButton.addEventListener("click", () => {
  scrollToElement("hero")
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    scrollToElement("hero");
  }, ANIMATION_DELAY_TIME);
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView( {
      behavior: "smooth",
      block: "start",
    });
  }
}