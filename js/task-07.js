// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const FontSizeConttrol = document.querySelector("#font-size-control");
console.log(FontSizeConttrol);

const textSpan = document.querySelector("#text");
console.log(textSpan);

FontSizeConttrol.addEventListener('input', () => {
    const fontSize = FontSizeConttrol.value + 'px';
    textSpan.style.fontSize = fontSize;
});