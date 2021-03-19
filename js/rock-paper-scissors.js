// console.log("Hello world!")

function computerPlay() {
    const randomMove = Math.ceil(Math.random() * 3);
    if (randomMove === 1) {
        return "rock"
    } else if (randomMove === 2) {
        return "paper"
    } else { return "scissor" }
}

// console.log(computerPlay());

function playRound(plSelect, cpSelect) {
    plSelect = plSelect.toLowerCase();
    if (plSelect === "rock" && cpSelect === "rock" || plSelect === "paper" && cpSelect === "paper" || plSelect === "scissor" && cpSelect === "scissor") {
        return "draw"
    } else if (plSelect === "rock" && cpSelect === "scissor" || plSelect === "paper" && cpSelect === "rock" || plSelect === "scissor" && cpSelect === "paper") {
        return "player win"
    } else {return "computer win"}
}

const playerPlay = prompt();
const game = playRound(playerPlay, computerPlay());
console.log(game);