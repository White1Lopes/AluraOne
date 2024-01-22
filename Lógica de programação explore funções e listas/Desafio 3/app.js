const PI = 3.14;

console.log(calculateBMI(82, 1.78));
console.log(calculateFactorialWithRecursion(1));
console.log(calculateFactorialWithoutRecursion(1));
console.log("R$ " + conversion(3).toFixed(2));
console.log(showAreaAndPerimeterRectangular(5, 10));
console.log(showAreaAndPerimeterTriangular(12.5));
console.log(multiplicationTable(5));


function multiplicationTable(number)
{
    for(let i = 0; i <= 10; i++)
    {
        console.log(`${number} x ${i} = ${parseInt(number) * i}`)
    }
}

function showAreaAndPerimeterRectangular(height, length)
{
    console.log("Area: " + height * length + "m²");
    console.log("Perimeter:" + 2 * (height + length) + "m");
}

function showAreaAndPerimeterTriangular(radius)
{
    console.log("Area: " + PI * Math.pow(radius, 2) + "m²");
    console.log("Perimeter:" + 2* PI * radius + "m");
}

function conversion(quantityInDolar)
{
    return quantityInDolar * 4.8;
}

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function calculateFactorialWithRecursion(number) {
    if (number == 1 || number == 0) return 1;
    return number * calculateFactorialWithRecursion(number - 1)
}

function calculateFactorialWithoutRecursion(number) {
    let factorial = number;

    if (number == 1 || number == 0) return 1;

    while(number != 1)
    {
        factorial *= (number - 1)
        number--
    }

    return factorial;
}