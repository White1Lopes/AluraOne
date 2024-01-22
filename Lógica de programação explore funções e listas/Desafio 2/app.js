helloWorld();
helloName("Luiz");
console.log(double(2));
console.log(average(2,4,10));
console.log(whoIsBigger(10,4));
console.log(pow2(100));


function whoIsBigger(number1, number2)
{
    if(number1 > number2)
        return number1;

    return number2;
}

function pow2(number)
{
    return number * number;
}

function average(number1, number2, number3)
{
    return (number1 + number2 + number3) / 3;
}

function double(number)
{
    return number * 2;
}

function helloName(name)
{
    console.log(`Hello ${name}`);
}

function helloWorld()
{
    console.log("Hello world!");
}