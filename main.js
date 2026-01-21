
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const result = document.getElementById("result");

const choices = ['paper', 'rock', 'scissors'];
let playerChoice, computerChoice;

const possibleChoices = document.querySelectorAll('button');
possibleChoices.forEach(element => element.addEventListener('click', (e) => {
        playerChoice = e.target.id
        computerChoice = choices[Math.floor(Math.random() *3)]

        let winner = getWinner();
        playerChoiceDisplay.innerText = playerChoice;
        computerChoiceDisplay.innerText = computerChoice;
        result.innerText = winner;
    })   
);


const getWinner = () =>{
    if (playerChoice === computerChoice) {
        return "It's a draw!"
    } else if (playerChoice === 'rock') {
        return computerChoice === 'scissors' ? 'player':'computer';
    } else if (playerChoice === 'scissors') {
        return computerChoice === 'paper' ? 'player': 'computer';
    } else if (playerChoice === 'paper') {
        return computerChoice === 'scissors' ? 'player': 'computer';
    } 
}

