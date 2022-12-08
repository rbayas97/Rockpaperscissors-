// const playerSelection = prompt("Please choose between Rock, Paper, or Scissors:")
// const computerSelection = getComputerChoice();
// let playerScore = 0;
// let computerScore = 0;


function getComputerChoice(){
    let compchoices = ['Rock', 'Paper', 'Scissors'];
    let randomchoices = compchoices[Math.floor(Math.random() * compchoices.length)];
    return randomchoices;
}

function playRound(playerSelection, computerSelection){
    let playerScore = 0;
    let computerScore = 0;
    const playerSelectionCI = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelectionCI === computerSelection){
        return ("Draw! Nobody Wins");
    }  else if (playerSelectionCI === 'Rock' && computerSelection === 'Paper'){
        computerScore += 1;
        return ("You lose! Paper beats Rock");
    }  else if (playerSelectionCI === 'Rock' && computerSelection === 'Scissors'){
        playerScore += 1;
        return ("You win! Rock beats Scissors"); 
    }  else if (playerSelectionCI === 'Paper' && computerSelection === 'Rock'){
        playerScore += 1;
        return ("You win! Paper beats Rock"); 
    }  else if (playerSelectionCI === 'Paper' && computerSelection === "Scissors"){
        computerScore += 1;
        return ("You lose! Scissors beats Paper"); 
    }  else if (playerSelectionCI === 'Scissors' && computerSelection === 'Rock'){
        computerScore += 1;
        return ("You lose! Rock beats Scissors"); 
    }  else if (playerSelectionCI === 'Scissors' && computerSelection === 'Paper'){
        playerScore += 1;
        return ("You win! Scissors beats Paper");
    }  else {
        return ("We can't play the game");
    } 

}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Please choose between Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();