let max = 10;
let secretNumber = generateRandomNumber(max);
let trys = 1;

showInitialMessage();

function showTextInScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function generateRandomNumber(range) {
    return parseInt(Math.random() * range + 1);
}

function checkTry() {
    let tryNumber = document.querySelector("input").value;
    if (tryNumber == secretNumber) {
        showTextInScreen("h1", "Você acertou!");

        let tryWord = trys > 1 ? "tentativas" : "tentativa";
        let tryMessage = `Parabéns, você descobriu o número secreto com ${trys} ${tryWord}`;

        showTextInScreen("p", tryMessage);

        document.getElementById("reiniciar").removeAttribute("disabled");

        return;
    } else if (tryNumber > secretNumber) {
        showTextInScreen("p", "O número secreto é menor");
    } else {
        showTextInScreen("p", "O número secreto é maior");
    }

    cleanField();
    trys++;
}

function cleanField() {
    document.querySelector("input").value = "";
}

function showInitialMessage()
{
    showTextInScreen("h1", "Jogo do número secreto");
    showTextInScreen("p", "Escolha um número de 1 a 10");
}

function restartGame() {
    max = 10;
    secretNumber = generateRandomNumber(max);
    trys = 1;
    showInitialMessage();
    cleanField();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}