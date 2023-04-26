const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener('change', () => {
  spanText.style.fontSize = `${inputRange.value}px`;
});
