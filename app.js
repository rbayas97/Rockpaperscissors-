let playerScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const outcome = document.createElement('div');
const content = document.createElement('div');


function getComputerChoice(){
    let compchoices = ['Rock', 'Paper', 'Scissors'];
    let randomchoices = compchoices[Math.floor(Math.random() * compchoices.length)];
    return randomchoices
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        outcome.textContent = 'Draw! Nobody gets a point';
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        computerScore += 1;
        outcome.textContent =  "You lose! Paper beats Rock";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerScore += 1;
        outcome.textContent = "You win! Rock beats Scissors";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore += 1;
        outcome.textContent = "You win! Paper beats Rock";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Paper' && computerSelection === "Scissors"){
        computerScore += 1;
        outcome.textContent = "You lose! Scissors beats Paper";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore += 1;
        outcome.textContent =  "You lose! Rock beats Scissors";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore += 1;
        outcome.textContent = "You win! Scissors beats Paper";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }  else {
        outcome.textContent = "We can't play the game";
        body.appendChild(outcome);
        body.insertBefore(outcome,content);
    }

}

function scoreTable() {
    content.classList.add('content');
    content.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    body.appendChild(content);
}

function updateScore() {
    content.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

}

function winningUser() {
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        alert("You won the Game! Make your choice to play Again");
    } else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        alert("You lost the game! Make your choice to play Again");
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    scoreTable();
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.textContent;
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            updateScore();
            winningUser();
        });
    });
}

game()
