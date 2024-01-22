// CHallenge 1

console.log("Welcome!");

// Challenge 2

let name = "Luiz Gustavo";

console.log(`Welcome, ${name}`);

// Challenge 3
alert(`Welcome ${name}`);

// Challenge 4
let programmingLanguage = prompt("What programming language do you like better?");
console.log(programmingLanguage);

//Challenge 5
let value1 = 5;
let value2 = 10;
let resultSum = value1 + value2;

console.log(`The sum of ${value1} and ${value2} is ${resultSum}`);

// Challenge 6
let resultSubtraction = value1 - value2;

console.log(`The subtraction of ${value1} and ${value2} is ${resultSum}`);

// Challenge 7
let age = prompt("Tell me your age:");

let message = age >= 18 ? "You are of legal age" : "You aren't legal age";

alert(message);

// Challenge 8
let number = prompt("Tell me a number:");

if(number > 0)
{
    alert(`${number} is positive`);
    console.log(`${number} is positive`);
} else {
    alert(`${number} is negative`);
    console.log(`${number} is negative`);
}

// Challenge 9
let countWhile = 1;
while(countWhile <=10)
{
    console.log(`${countWhile}`);
    countWhile++;
}

// Challenge 10
let rating = 8;
let passingScore = 7;

if(rating >= passingScore)
{
    console.log("Aproved");
} else {
    console.log("Reproved");
}

// Challenge 11
console.log(parseInt(Math.random() * 10 + 1));

//Challenge 12

console.log(parseInt(Math.random() * 100 + 1));

//Challenge 13

console.log(parseInt(Math.random() * 1000 + 1));