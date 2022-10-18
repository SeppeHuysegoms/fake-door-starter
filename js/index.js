import JSConfetti  from  '../node_modules/js-confetti/dist/es/index.js';

const init = () => {
  const jsConfetti = new JSConfetti();
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    jsConfetti.addConfetti({ emojis: ["🐶", "🦊", "🐰", "🐻", "🐼", "🐻‍❄️"] });
  });
}


init();