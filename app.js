let playerScore = 0;
let computerScore = 0;
let playerButton; 
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const message = document.createElement('div')
const content = document.createElement('div');

function getComputerChoice(){
    let compchoices = ['Rock', 'Paper', 'Scissors'];
    let randomchoices = compchoices[Math.floor(Math.random() * compchoices.length)];
    return randomchoices
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        message.textContent = 'Draw! Nobody gets a point';
        body.appendChild(message);
    }  else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        computerScore += 1;
        message.textContent =  "You lose! Paper beats Rock";
        body.appendChild(message);
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerScore += 1;
        message.textContent = "You win! Rock beats Scissors"; 
        body.appendChild(message);
    }  else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore += 1;
        message.textContent = "You win! Paper beats Rock"; 
        body.appendChild(message);
    }  else if (playerSelection === 'Paper' && computerSelection === "Scissors"){
        computerScore += 1;
        message.textContent = "You lose! Scissors beats Paper"; 
        body.appendChild(message);
    }  else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore += 1;
        message.textContent =  "You lose! Rock beats Scissors"; 
        body.appendChild(message);
    }  else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore += 1;
        message.textContent = "You win! Scissors beats Paper";
        body.appendChild(message);
    }  else {
        message.textContent = "We can't play the game";
        body.appendChild(message);
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
        alert("You won the Game! Press OK to play Again")
    } else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        alert("You lost the game! Press OK to play Again")
    } updateScore();
}

function game() {
    scoreTable();
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerButton = button.textContent;
            playerSelection = playerButton;
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            updateScore();
            winningUser();
        });
    });
}

game()
