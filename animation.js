const topIcon = document.getElementById("top-icon");
const splashBackgroundColors = ["#000000", "#ff0000", "#0000ff", "#ffdd00", "#f000a0", "#f09000", "#00ee00"];
let index = 0;

topIcon.addEventListener( "click", () => {
  document.documentElement.style.setProperty("--splash-background-color", splashBackgroundColors[index = ++index % splashBackgroundColors.length]);
});