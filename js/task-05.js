// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", handleOnInput);

function handleOnInput(event) {
  if (event.currentTarget.value.length === 0) {
    nameLabel.textContent = "Anonymous";
  } else {
    nameLabel.textContent = event.currentTarget.value;
  }
}
