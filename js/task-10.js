// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const numberInput = document.querySelector("[type='number']");
const divBoxes = document.querySelector("#boxes");
let arrayOfElements = [];
const default_size = 30;
let size = default_size;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement("div");
    var color = getRandomHexColor();
    createDiv.style.backgroundColor = color;
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    arrayOfElements.push(createDiv);
    size += 10;
  };
  divBoxes.append(...arrayOfElements);
  console.log(arrayOfElements);
};

createBtn.addEventListener("click", () => {
  const number = parseInt(numberInput.value);
  arrayOfElements = [];
  createBoxes(number);
});

destroyBtn.addEventListener("click", () => {
  while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.firstChild);
  };
  size = default_size;
});


