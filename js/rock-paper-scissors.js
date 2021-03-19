// console.log("Hello world!")

function computerPlay() {
    const randomMove = Math.ceil(Math.random() * 3);
    if (randomMove === 1) {
        return "Rock"
    }
    else if (randomMove === 2) {
        return "Paper"
    } else {return "Scissor"}
}

console.log(computerPlay());