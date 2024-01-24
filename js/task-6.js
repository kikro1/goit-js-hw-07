// Функция генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функция создания квадратов
function createBoxes(amount) {
  let size = 30;
  
  for (let i = 0; i < amount; i++) {
    // Создаем div c уникальным классом
    let div = document.createElement('div');
    div.classList.add('box-' + i);

    // Увеличиваем размер   
    size += 10;

    // Задаем размер и цвет фона  
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();

    // Добавляем на страницу  
    boxesContainer.appendChild(div); 
  }
}

// Функция удаления квадратов  
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Получаем элементы
const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Обработчики событий кнопок
createBtn.addEventListener('click', () => {
  const amount = input.valueAsNumber;

  if (amount < 1 || amount > 100) {
    return; 
  }

  createBoxes(amount); 
  input.value = '';  
});

destroyBtn.addEventListener('click', destroyBoxes);