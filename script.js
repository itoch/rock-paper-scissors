let randomInt;
let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('button');
const output = document.querySelector('.output');
const rockBtn = document.querySelector(`button[data-btn="rock"]`);
const paperBtn = document.querySelector(`button[data-btn="paper"]`);
const scissorBtn = document.querySelector(`button[data-btn="scissors"]`);
const displayPlayerSelection = document.createElement('div');
const displayComputerSelection = document.createElement('div');

output.appendChild(displayPlayerSelection);
output.appendChild(displayComputerSelection);




function getRandomInt() {
    randomInt = Math.floor(Math.random()*3); /* get random integer */
} 


function getComputerChoice () {/* get computer choice based on random integer */
    
    getRandomInt();
    
    if (randomInt === 0) {
        return "paper"
    } else if (randomInt === 1) {
        return "rock"
    } else {
        return "scissors"
    }
};


function playRound (playerSelection, computerSelection) { 
 

    if (playerSelection === "rock" && computerSelection === "scissors") { /* Here we can also use "switch" statement*/
        playerScore = ++playerScore;
        return "You win! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore;
        return "You win! Scissors beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore = ++playerScore;
        return "You win! Paper beats rock"
    } else if  (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore;
        return "You lose! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = ++computerScore;
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore = ++computerScore;
        return "You lose! Paper beats rock"
    } else if (playerSelection === computerSelection) {
        return "Draw! Try again"
    } 

}




function game () {
    // for (let i = 0; i<5; i++) {    *REMOVING 5 ROUNDS*
    
    const playerSelection = this.dataset.btn;
    const computerSelection = getComputerChoice();
    console.log(`Player score: ${playerScore} and Computer score: ${computerScore}`);
}

    if (playerScore === computerScore) {
        console.log(`TIE GAME!`)
    } else if (playerScore === computerScore){
        console.log(`Player wins with score: ${playerScore}`)
    } else {
        console.log(`Computer wins with score: ${computerScore}`)
    }
// };

// game();

btns.forEach (btn => {
    btn.addEventListener('click', function (e) {
        const playerSelection = this.dataset.btn;
        const computerSelection = getComputerChoice();

        displayPlayerSelection.innerText = `Player choice: ${playerSelection}`;
        displayComputerSelection.innerText = `Computer choice: ${computerSelection}`;

        playRound(playerSelection, computerSelection);
        
    });
})