let title = document.querySelector("h1");
title.innerHTML = "Challenge time";

function consoleMessage()
{
    console.log("The button is clicked!");
}

function alertMessage()
{
    alert("I Love JS!");
}

function promptMessage()
{
    let cityName = prompt("Tell me a name of a city:");
    alert(`I was in ${cityName} and remembered you`);
}

function sumMessage()
{
    let value1 = prompt("Tell me a number:");
    let value2 = prompt("Tell me other number:");

    alert(`Them sum of ${value1} and ${value2} is ${parseInt(value1) + parseInt(value2)}`)
}