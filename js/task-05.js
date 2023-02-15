// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInput = document.querySelector('#name-input'); // input
const nameOutput = document.querySelector('#name-output'); //span

const inputUser = () => {
  if (nameInput.value.lenght === 0) {
    nameOutput = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
};

nameInput.addEventListener('input', inputUser);
