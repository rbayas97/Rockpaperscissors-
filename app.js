function getComputerChoice(){
    let compchoices = ['Rock', 'Paper', 'Scissors'];
    let randomchoices = compchoices[Math.floor(Math.random() * compchoices.length)];
    return randomchoices;
};

function rpsRounds(playerSelection, computerSelection){
    let playerSelectionCI = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelectionCI === computerSelection){
        return ("Draw! Nobody Wins");
    }  else if (playerSelectionCI === 'Rock' && computerSelection === 'Paper'){
        return ("You lose! Paper beats Rock");
    }  else if (playerSelectionCI === 'Rock' && computerSelection === 'Scissors'){
        return ("You win! Rock beats Scissors");
    }  else if (playerSelectionCI === 'Paper' && computerSelection === 'Rock'){
        return ("You win! Paper beats Rock");
    }  else if (playerSelectionCI === 'Paper' && computerSelection === "Scissors"){
         return ("You lose! Scissors beats Paper");
    }  else if (playerSelectionCI === 'Scissors' && computerSelection === 'Rock'){
         return ("You lose! Rock beats Scissors");
    }  else if (playerSelectionCI === 'Scissors' && computerSelection === 'Paper'){
         return ("You win! Scissors beats Paper");
    }  else {
        return ("We can't play the game");
    }
};

const playerSelection = "RoCK";
const computerSelection = getComputerChoice();

console.log(rpsRounds(playerSelection,computerSelection));
console.log(computerSelection);
