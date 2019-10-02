// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../number-checker.js/';

const test = QUnit.test;

test('should return 0 if the user inputs the randomly generated number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 5;
    const userInput = correctNumber;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userInput, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});
