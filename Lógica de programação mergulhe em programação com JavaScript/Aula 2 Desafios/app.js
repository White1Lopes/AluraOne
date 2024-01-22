let dayChoice = prompt("What day of the week is it?");

if(dayChoice.toLocaleLowerCase() == "sunday" || dayChoice.toLocaleLowerCase() == "saturday")
{
    alert("Good weekend!");
} else {
    alert("Good week!");
}

let numberChoice = prompt("Choose a number!");

if(numberChoice >= 0){
    alert("the number is positive!");
}else {
    alert("The number is negative!");
}

let score = prompt("What is the score?");

if(score >= 100)
{
    alert("Congratulations! You win!");
} else {
    alert("Try again to win!")
}

let balance = prompt("What is your balance?");

alert(`Your balance is R$ ${balance}`);

let name = prompt("What is your name?");

alert(`Welcome ${name}`);