/*
paper  - rock -> win
paper - scissor -> lose

rock - scissor -> win
rock - paper -> lose

sicssor - paper -> win
sicssor - rock -> lose

*/


const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const result = document.getElementById("result");
const choices = ['paper', 'rock', 'scissors'];

const btns = document.getElementsByTagName('button');
Array.from(btns).forEach(element => {
    element.addEventListener('click', (e) => {
        let player = e.target.id.toLowerCase()

        let [winner, computer] = game(player);
        computerChoice.innerText = computer;
        playerChoice.innerText = player;
        result.innerText = winner;
    })   
});





const whoWin = (player, computer) => {
    if (player === 'paper') {
    return computer === 'rock' ? 'player': computer === 'scissors' ? 'computer': 'draw';
} else if (player === 'rock') {
    return computer === 'scissors' ? 'player': computer === 'paper' ? 'computer': 'draw';
} else if (player === 'scissors') {
    return computer === 'paper' ? 'player': computer === 'rock' ? 'computer': 'draw';
} else {
    return 'error'
}
}
const game = (playerChoice) => {
    let player = playerChoice;
    let computerChoice = choices[Math.floor(Math.random() *3)]
    let winer = whoWin(player, computerChoice);
    console.log(`Player: ${player} | Computer: ${computerChoice} => Winer: ${winer}`)
    return [winer, computerChoice]
}

