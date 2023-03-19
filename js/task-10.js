function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const idBoxes = document.querySelector('#boxes');

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

// console.log(boxNum);

const createBoxes = (amount) => {
  const widthBox = 30,
    heightBox = 30;
  let stringInHTML = '';
  for (let i = 0; i < amount; i++) {
    stringInHTML += `<div style="background-color:${getRandomHexColor()}; width: ${
      widthBox + i * 10
    }px; height: ${heightBox + i * 10}px;"></div>`;
  }
  idBoxes.insertAdjacentHTML('afterbegin', stringInHTML);
};

const destroyBoxes = () => {
  const divForDestroy = idBoxes.querySelectorAll('div');
  divForDestroy.forEach((item) => {
    item.remove();
  });
};

btnCreate.addEventListener('click', () => {
  const boxNum = document.getElementsByTagName('input')[0].value;
  createBoxes(boxNum);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});
