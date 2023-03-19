const categories = document.querySelector('ul#categories');

const ulList = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${ulList.length}`);
ulList.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});
