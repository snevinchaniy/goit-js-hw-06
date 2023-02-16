// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputElem = document.querySelector('#validation-input');

const inputData = () => {
  if (inputElem.value.length === Number(inputElem.getAttribute('data-length'))) {
    inputElem.classList.remove('invalid');
    inputElem.classList.add('valid');
  } else {
    inputElem.classList.remove('valid');
    inputElem.classList.add('invalid');
  }
};

inputElem.addEventListener('blur', inputData);
