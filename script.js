// script.js
document.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".scene");
  const buttons = document.querySelectorAll("button");
  const music = document.getElementById("bg-music");
  music.volume = 0.2;

  let currentScene = 0;

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      scenes[currentScene].classList.remove("active");
      currentScene = index + 1;
      if (currentScene < scenes.length) {
        scenes[currentScene].classList.add("active");
      }
    });
  });

  // Disable scrolling completely
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  document.body.addEventListener("wheel", (e) => e.preventDefault(), { passive: false });
  document.body.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  document.body.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"].includes(e.code)) {
      e.preventDefault();
    }
  });
});