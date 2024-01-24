function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValueElement = document.querySelector('.color');  
const pageBodyElement = document.body;

changeColorBtn.addEventListener('click', () => {

  const color = getRandomHexColor();

  pageBodyElement.style.backgroundColor = color;
  colorValueElement.textContent = color;

});