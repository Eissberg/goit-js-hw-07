const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
const spanText = document.querySelector('#value');

let counterValue = 0;
spanText.textContent = counterValue;

decButton.addEventListener('click', () => {
  counterValue -= 1;
  spanText.textContent = counterValue;
});

incButton.addEventListener('click', () => {
  counterValue += 1;
  spanText.textContent = counterValue;
});
