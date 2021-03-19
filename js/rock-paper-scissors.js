// console.log("Hello world!")

// const start = game();

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
    } else { return "computer win" }
}

// const playerSelection = prompt();
// const ComputerSelection = computerPlay();

// const game = playRound(playerPlay, ComputerSelection);
// console.log(game);

function game() {
    let plScore = 0;
    let cpScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("select rock, paper, or scissor!");
        const ComputerSelection = computerPlay();

        while (!playerSelection) {
            playerSelection = prompt("invalid selection")
        }

        const oneRound = playRound(playerSelection, ComputerSelection);

        if (oneRound === "player win") {
            plScore++;
        } else if (oneRound === "computer win") {
            cpScore++;
        }
        console.log(`you choose ${playerSelection}`)
        console.log(`computer chooses ${ComputerSelection}`)
        console.log(oneRound);
        console.log(`current score is: ${plScore}:${cpScore}`)
    }
    console.log("GAME OVER!")
    if (plScore > cpScore) {
        console.log("YOU WON THE GAME!")
    } else if (plScore < cpScore) {
        console.log("YOU LOSE!")
    } else { console.log("IT'S A DRAW") }
}