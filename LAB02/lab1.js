// Importing the 'prompt' package
const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'PAPER';
    } else if (randomNumber < 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Setting up prompt
prompt.start();

// Ask user for input
prompt.get(['userSelection'], function (err, result) {
    if (err) { return console.error(err); }
    
    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = generateComputerSelection();

    // Display selections
    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);

    // Determine the winner
    // Your code for determining the winner goes here

    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log("User Wins");
    } else if (
        (userSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (userSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (userSelection === 'PAPER' && computerSelection === 'SCISSORS')
    ) {
        console.log("Computer Wins");
    } else {
        console.log("It's a tie");
    }
});