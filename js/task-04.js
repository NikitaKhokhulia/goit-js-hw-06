// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const spanEl = document.querySelector("#value");
let counterValue = 0;

const handleClickBtnDecrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

const handleClickBtnIncrement = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", handleClickBtnDecrement);
incrementBtnEl.addEventListener("click", handleClickBtnIncrement);
