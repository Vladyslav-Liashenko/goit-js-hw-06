// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const liItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItem.length}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

liItem.forEach(liItem => {
    const childLiItem = liItem.querySelector('h2');
    const elementsChildLiItem = childLiItem.nextElementSibling;
    const el2 = elementsChildLiItem.children;

    console.log(`Category: ${childLiItem.textContent}`);
    console.log(`Elements: ${el2.length}`);
});



// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5






