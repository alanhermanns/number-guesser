import compareNumbers from './number-checker.js';

const correctNumber = Math.ceil(Math.ceil(Math.random() * 100) / 5);
console.log(correctNumber);

const result = document.getElementById('result-area');
const button = document.getElementById('button');
const guess = document.getElementById('number-input');
const refreshButton = document.getElementById('refresh-button');
let attempts = 0;

button.addEventListener('click', () => {
    let userInput = parseInt(guess.value);
    let displayMessage = '';
    if (compareNumbers(userInput, correctNumber) === 0) {
        displayMessage = ('got it.');
        refreshButton.classList.remove('hidden');
    } else if (compareNumbers(userInput, correctNumber) === -1){
        displayMessage = ('too low.');
    }
    else {
        displayMessage = ('too high.');
    }
    result.textContent = displayMessage;

    attempts = attempts + 1;
    
    if (attempts >= 3 && attempts < 7 && compareNumbers(userInput, correctNumber) !== 0) {
        result.textContent = ('Oops! You are out, bud!');
        refreshButton.classList.remove('hidden');
    }
    if (attempts >= 7) {
        result.textContent = ('Do not push it!');
    } 
});
    
refreshButton.addEventListener('click', () => {
    location.reload();
    
});




