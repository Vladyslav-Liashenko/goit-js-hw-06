// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
const textInput = document.querySelector("#validation-input");
const minLength = 6;

textInput.addEventListener("blur", () => {
    if (textInput.value.length < minLength) {
        alert("Текст слишком короткий. Минимальная длина: 6");
    };
});

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const validationInput = document.querySelector("#validation-input");

function classtoggler(classremove, classtoadd) {
    validationInput.classList.remove(classremove);
    validationInput.classList.add(classtoadd);
};

validationInput.addEventListener("blur", () => {
    const inputLength = validationInput.value.length;
    if (inputLength === minLength) {
        classtoggler("invalid", "valid");
    } else {
        classtoggler("valid", "invalid");
    };
});



// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

