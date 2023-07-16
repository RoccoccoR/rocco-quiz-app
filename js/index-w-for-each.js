// bookmark toggle

const toggleBookmark = document.querySelector('[data-js="toggle-bookmark"]');

toggleBookmark.addEventListener("click", () => {
  toggleBookmark.classList.toggle("marked-bookmark");
});

// answer button

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answerParagraph = document.querySelector(".main__card__answer");

answerParagraph.style.display = "none";

// hide the answer initially

showAnswerButton.addEventListener("click", () => {
  if (answerParagraph.style.display === "none") {
    answerParagraph.style.display = "block";
    showAnswerButton.innerHTML = "Hide Answer";
  } else {
    answerParagraph.style.display = "none";
    showAnswerButton.innerHTML = "Show Answer";
  }
});
