alert("Welcome to the secret game!");
let max = 1000;
let min = 1;

let secretNumber = parseInt(Math.random() * max + 1);

let choiceNumber;
let trys = 1;

while (choiceNumber != secretNumber) {
    choiceNumber = prompt(`Put the number in the range ${min} to ${max}:`);
    
    if (secretNumber == choiceNumber) {
        break;
        
    } else if(choiceNumber > secretNumber) {
        alert(`Your number is bigger than the secret.`);
    }
    else {
        alert(`Your number is lower than the secret.`);
    }
    trys++;
}

let tryMessage = trys > 1 ? "trys" : "try"

alert(`You chose the right number: ${secretNumber} in ${trys} ${tryMessage}. You win!`);

