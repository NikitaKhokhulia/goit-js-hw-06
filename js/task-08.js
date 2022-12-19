// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
const inputEmail = form.email;
const inputPassword = form.password;

console.log(inputPassword.value);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Введіть логін і пароль");
  } else {
    const formData = {
      mailText: inputEmail.value,
      passwordText: inputPassword.value,
    };
  }
  form.reset();
}
