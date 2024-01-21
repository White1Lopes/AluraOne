alert("Welcome to the secret game!");

let secretNumber = 4;

let choiceNumber = prompt("Put the number in the range 1 to 10:");

if (secretNumber == choiceNumber) {
    alert("You win!")
} else {
    alert("Oh no, you lose ;(")
}
