const inputForCheck = document.querySelector('#validation-input');

inputForCheck.onblur = () => {
  if (inputForCheck.value.length > inputForCheck.dataset.length) {
    inputForCheck.classList.remove('valid');
    inputForCheck.classList.add('invalid');
  } else {
    inputForCheck.classList.remove('invalid');
    inputForCheck.classList.add('valid');
  }
};
