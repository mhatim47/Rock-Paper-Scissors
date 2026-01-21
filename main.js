/*
paper  - rock -> win
paper - scissor -> lose

rock - scissor -> win
rock - paper -> lose

sicssor - paper -> win
sicssor - rock -> lose

*/


let btn = document.getElementById("btn");
let pchoice = document.getElementsByName('p-choics');
let compchoice = document.getElementById("c-choice");
const form = document.querySelector("form");

btn.addEventListener('click', (e) => {
    const data = new FormData(form);
    let player = getPlayerChoice(data)
    let [winner, computerChoice] = game(player);
    compchoice.innerHTML = `${computerChoice}, winner is : ${winner}`;
    console.log(player);
    e.preventDefault()
    
})


const whoWin = (player, computer) => {
    if (player === 'paper') {
    return computer === 'rock' ? 'player': computer === 'scissor' ? 'computer': 'draw';
} else if (player === 'rock') {
    return computer === 'scissor' ? 'player': computer === 'paper' ? 'computer': 'draw';
} else if (player === 'scissor') {
    return computer === 'paper' ? 'player': computer === 'rock' ? 'computer': 'draw';
} else {
    return 'error'
}
}
const game = (playerChoice) => {
    const choices = ['paper', 'rock', 'scissor'];
    let player = playerChoice;
    let computerChoice = choices[Math.floor(Math.random() *3)]
    let winer = whoWin(player, computerChoice);
    console.log(`Player: ${player} | Computer: ${computerChoice} => Winer: ${winer}`)
    return [winer, computerChoice]
}

const getPlayerChoice = (data) => {
    for (const entry of data) {
        return entry[1].toLowerCase();
    }
}