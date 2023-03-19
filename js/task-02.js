const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listOfLi = [];

for (let item of ingredients) {
  const addLi = document.createElement('li');
  addLi.textContent = item;
  addLi.classList.add('item');
  listOfLi.push(addLi);
}

const ulForAdd = document.querySelector('ul#ingredients');

listOfLi.forEach((item) => {
  ulForAdd.append(item);
});
