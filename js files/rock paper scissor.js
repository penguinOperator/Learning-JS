let player = Math.floor(Math.random() * 3)
let computer = Math.floor(Math.random() * 3);
let rock = 0
let paper = 1
let scissor = 2

if (player === rock) {
    console.log("Player chose rock")
}
if (player === paper) {
    console.log("Player chose paper")
}
if (player === scissor) {
    console.log("Player chose scissor")
}

// computer

if (computer === rock) {
    console.log("computer chose rock")
}
if (computer === paper) {
    console.log("computer chose paper")
}
if (computer === scissor) {
    console.log("computer chose scissor")
}

if (player === computer) {
    console.log("It's a tie") // if player choose same as computer, tie
}

else if (
    (player === rock && computer === scissor) || //the player choose rock && (and) computer choose scissor
    (player === paper && computer === rock) ||
    (player === scissor && computer === paper)
) {
    console.log("Player wins")
}

else {
    console.log("Computer wins")
}

