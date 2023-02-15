// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const numCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', numCategories.length);

numCategories.forEach(elem => {
  const titleTextCategories = elem.querySelector('h2').textContent;
  console.log('Category: ', titleTextCategories);

  const numItemListCategories = elem.querySelectorAll('li').length;
  console.log('Elements: ', numItemListCategories);
});
