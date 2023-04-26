function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const spanText = document.querySelector('.color');

changeColorButton.addEventListener('click', changeColor);

function changeColor() {
  const colorId = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
  spanText.textContent = colorId;
}
