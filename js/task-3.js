const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', event => {

    const inputValue = event.currentTarget.value.trim();

    nameOutput.textContent = inputValue ? inputValue : 'Anonymous';

});