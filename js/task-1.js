const categoriesList = document.getElementById('categories');
const categoriesItems = document.querySelectorAll('.item');

// Task 1
console.log(`Number of categories: ${categoriesItems.length}`);

// Task 2
categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}\nItems count: ${categoryItemsCount}`);
});
