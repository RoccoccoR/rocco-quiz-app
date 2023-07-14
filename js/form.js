const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const questionInput = document.querySelector(".form__question");
  const answerInput = document.querySelector(".form__answer");
  const tagInput = document.querySelector(".form__input");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  const card = document.createElement("div");
  card.classList.add("card");

  const questionText = document.createElement("h3");
  questionText.textContent = question;

  const answerText = document.createElement("p");
  answerText.textContent = answer;

  const tagText = document.createElement("span");
  tagText.textContent = tag;

  const formElement = document.querySelector(".form");
  formElement.insertAdjacentElement("afterend", card);
  card.append(questionText);
  card.append(answerText);
  card.append(tagText);

  form.reset();
});
