let current = 1;
const total = 5;

function nextScene() {
  const currentScene = document.getElementById(`scene${current}`);
  currentScene.classList.remove("active");

  current++;
  if (current <= total) {
    const next = document.getElementById(`scene${current}`);
    setTimeout(() => next.classList.add("active"), 300);
  }
}

// block scrolling completely
window.addEventListener("wheel", e => e.preventDefault(), { passive: false });
window.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

// force music play (mobile)
document.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once: true });
