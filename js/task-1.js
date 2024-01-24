const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('.item');

let categoriesCount = categories.length; 

console.log(`Number of categories: ${categoriesCount}`); 

categories.forEach(category => {

  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryElements = category.querySelectorAll('li');
  const categoryElementsCount = categoryElements.length;
  
  console.log(`Elements: ${categoryElementsCount}`);
});