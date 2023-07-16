const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const questionInput = document.querySelector(".form__question");
  const answerInput = document.querySelector(".form__answer");
  const tagInput = document.querySelector(".form__input");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  createCard(question, answer, tag);

  form.reset();

  resetCharacterCount();
}

function createCard(question, answer, tag) {
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
  card.append(questionText, answerText, tagText);
}

const questionElements = document.querySelectorAll(
  '[data-js="textCharactersCounter"]'
);
const amountLeft1 = document.querySelector('[data-js="amountLeft1"]');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');
const maxLength = questionElements[0].getAttribute("maxlength");

const updateAmountLeft = (element, amountLeft) => {
  amountLeft.innerText = maxLength - element.value.length;
};

const resetCharacterCount = () => {
  questionElements.forEach((element) => {
    element.value = "";
    updateAmountLeft(element, amountLeft1);
    updateAmountLeft(element, amountLeft2);
  });
};

updateAmountLeft(questionElements[0], amountLeft1);
updateAmountLeft(questionElements[1], amountLeft2);

questionElements[0].addEventListener("input", () => {
  updateAmountLeft(questionElements[0], amountLeft1);
});

questionElements[1].addEventListener("input", () => {
  updateAmountLeft(questionElements[1], amountLeft2);
});
