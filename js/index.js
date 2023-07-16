const toggleBookmarks = document.querySelectorAll(
  '[data-js="toggle-bookmark"]'
);
const showAnswerButtons = document.querySelectorAll('[data-js="show-answer"]');
const answerParagraphs = document.querySelectorAll(".main__card__answer");

toggleBookmarks.forEach((toggleBookmark) => {
  toggleBookmark.addEventListener("click", () => {
    toggleBookmark.classList.toggle("marked-bookmark");
  });
});

showAnswerButtons.forEach((showAnswerButton, index) => {
  const answerParagraph = answerParagraphs[index];

  answerParagraph.style.display = "none";

  showAnswerButton.addEventListener("click", () => {
    if (answerParagraph.style.display === "none") {
      answerParagraph.style.display = "block";
      showAnswerButton.innerHTML = "Hide Answer";
    } else {
      answerParagraph.style.display = "none";
      showAnswerButton.innerHTML = "Show Answer";
    }
  });
});
