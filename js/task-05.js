const inputText = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputText.addEventListener('input', () => {
  if (inputText.value.length == 0) {
    spanText.textContent = 'Anonymous';
  } else {
    spanText.textContent = inputText.value;
  }
});
