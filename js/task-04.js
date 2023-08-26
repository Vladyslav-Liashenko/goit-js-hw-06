// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector("#value");

const plusBtn = document.querySelector('button[data-action="increment"]');

plusBtn.addEventListener("click", () => {
    counterValue.textContent = String(Number(counterValue.textContent) + 1);
});

const minBtn = document.querySelector('button[data-action="decrement"]');
minBtn.addEventListener("click", () => {
    counterValue.textContent = String(Number(counterValue.textContent) - 1);
});