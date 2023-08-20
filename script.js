let randomInt;

function getRandomInt() {
    randomInt = Math.floor(Math.random()*3);
}


function getComputerChoice () {
    
    getRandomInt();
    console.log(randomInt);
    
    if (randomInt === 0) {
        return "Paper"
    } else if (randomInt === 1) {
        return "Rock"
    } else {
        return "Scissors"
    }
};

console.log(getComputerChoice());


/* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! */

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

/* 
getRandomInt from 0 to 2
if randomInt === 0 then return "Paper"
if randomInt === 1 then return "Rock"
if randomInt === 2 then return "Scissors"


*/