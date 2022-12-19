function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ChangeBtn = document.querySelector(".change-color");
const randomColors = document.querySelector(".color");

ChangeBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  randomColors.textContent = document.body.style.backgroundColor;
});
