// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
