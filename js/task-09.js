// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  text.textContent = color;
});
