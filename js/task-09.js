function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ChangeBtn = document.querySelector(".change-color");
const randomColors = document.querySelector(".color");

ChangeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  randomColors.textContent = getRandomHexColor();
});
