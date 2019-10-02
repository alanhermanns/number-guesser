import compareNumbers from './number-checker.js';
const correctNumber = Math.ceil(Math.ceil(Math.random() * 100) / 5);
console.log(correctNumber);
const result = document.getElementById('result-area');
function uponButtonClick() {
    const userInput = document.getElementById('numberInput').value;
    console.log(userInput);
        if (compareNumbers(userInput, correctNumber) === 0) {
            result.textContent = ('got it.');
        } else if (compareNumbers(userInput, correctNumber) === -1){
            result.textContent = ('too low');
        }
        else {
            result.textContent = ('too high');
        }
        }

