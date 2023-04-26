const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

console.log(form.elements);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені');
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  form.reset();
}
