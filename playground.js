import compareNumbers from './number-checker.js';

const correctNumber = Math.ceil(Math.ceil(Math.random() * 100) / 5);
console.log(correctNumber);

const result = document.getElementById('result-area');
const button = document.getElementById('button');
const guess = document.getElementById('number-input');
const refreshButton = document.getElementById('refresh-button');
const header = document.getElementById('header');
let attempts = 0;

button.addEventListener('click', () => {
    let userInput = parseInt(guess.value);
    let displayMessage = '';
    if (attempts >= 3 && compareNumbers(userInput, correctNumber) === 0){
        displayMessage = 'got it, but too late!';
    }
    else if (attempts >= 3 && attempts < 7 && compareNumbers(userInput, correctNumber) !== 0) {
        result.textContent = ('Oops! You are out, bud!');
        refreshButton.classList.remove('hidden');
    }
    else if (attempts === 7) {
        result.textContent = ('Do not push it!');
    } 
    if (attempts >= 8) {
        result.textContent = ('No way, bud! Don\'t be that way.');
        button.classList.add('hidden');
        header.textContent = ('GUESSING FLAME');
        
    } 
    // if (attempts >= 3 && compareNumbers(userInput, correctNumber) === 0){
    //     displayMessage = 'got it, but too late!';
    if (compareNumbers(userInput, correctNumber) === 0 && attempts < 3) {
        displayMessage = 'got it.';
        refreshButton.classList.remove('hidden');
    } else if (compareNumbers(userInput, correctNumber) === -1 && attempts < 3){
        displayMessage = 'too low.';
    }
    else if (compareNumbers(userInput, correctNumber) === 1 && attempts < 3){
        displayMessage = 'too high.';
    }
    result.textContent = displayMessage;

    attempts = attempts + 1;
    
});
    
refreshButton.addEventListener('click', () => {
    location.reload();

});




