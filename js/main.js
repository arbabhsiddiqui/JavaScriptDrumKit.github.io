const keys = document.querySelectorAll(".key");

function addTransition(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"] `);
  const css = document.querySelector(`.key[data-key="${e.keyCode}"] `);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  css.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", (e) => {
  addTransition(e);
});

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
