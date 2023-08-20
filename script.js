let randomInt;

function getRandomInt() {
    randomInt = Math.floor(Math.random()*3);
}


function getComputerChoice () {
    
    getRandomInt();
    console.log(randomInt);
    
    if (randomInt === 0) {
        return "paper"
    } else if (randomInt === 1) {
        return "rock"
    } else {
        return "scissors"
    }
};

console.log(getComputerChoice());


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock"
    } else if (playerSelection === computerSelection) {
        return "Draw! Try again"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

/* 
getRandomInt from 0 to 2
if randomInt === 0 then return "Paper"
if randomInt === 1 then return "Rock"
if randomInt === 2 then return "Scissors"


*/