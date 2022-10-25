import JSConfetti from "js-confetti";
import "../css/style.css";

const init = () => {
  const jsConfetti = new JSConfetti();
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    jsConfetti.addConfetti({ emojis: ["🐶", "🦊", "🐰", "🐻", "🐼", "🐻‍❄️", "🐸"] });
  });
}


init();