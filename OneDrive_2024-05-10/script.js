const playerNames = {
    1: "Ramsdale",
    22: "Raya",
    2: "Saliba",
    4: "White",
    6: "Gabriel",
    8: "Ödegaard",
    10: "SmithRowe",
    29: "Havertz",
    7: "Saka",
    14: "Nketiah"
};

const numbersToGuess = Object.keys(playerNames).map(Number);

let randomNumberIndex = Math.floor(Math.random() * numbersToGuess.length);
let randomNumber = numbersToGuess[randomNumberIndex];
console.log("Random number:", randomNumber);

// Aktualizace záhlaví <h1> s odpovídajícím jménem hráče
document.getElementById("playerNameHeader").textContent = `Uhádni číslo hráče ${playerNames[randomNumber]}`;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);
    const message = document.getElementById("message");
    const guessesList = document.getElementById("guesses");
    const imageContainer = document.getElementById("imageContainer");


    const guessRow = document.createElement("tr");
    const guessNumberCell = document.createElement("td");
    guessNumberCell.textContent = guess;
    guessRow.appendChild(guessNumberCell);

    const comparisonCell = document.createElement("td");
    if (guess > randomNumber) {
        comparisonCell.textContent = "Zkus menší";
        comparisonCell.style.color = "blue";
    } else if (guess < randomNumber) {
        comparisonCell.textContent = " Zkus větší";
        comparisonCell.style.color = "red";
    } else {
        comparisonCell.textContent = "Správně";
        comparisonCell.style.color = "green";
        const resultImage = document.getElementById("resultImage");
        resultImage.src = `${guess}.jpg`; // Zobrazí obrázek odpovídající uhodnutému číslu
        imageContainer.style.display = "block"; // Zobrazí obrázek, když je uhádnuto správně
    }
    guessRow.appendChild(comparisonCell);

    guessesList.appendChild(guessRow);

    if (guess === randomNumber) {
        message.textContent = `Gratulujeme! Uhádl jsi číslo ${randomNumber} správně!`;
        message.style.color = "green";
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = "Zkus vyšší číslo.";
        message.style.color = "red";
    } else {
        message.textContent = "Zkus nižší číslo.";
        message.style.color = "blue";
    }
}

function resetGame() {
    randomNumberIndex = Math.floor(Math.random() * numbersToGuess.length);
    randomNumber = numbersToGuess[randomNumberIndex];
    console.log("New random number:", randomNumber);

    const guessInput = document.getElementById("guessInput");
    guessInput.value = "";
    guessInput.disabled = false;

    const message = document.getElementById("message");
    message.textContent = "";
    message.style.color = "";

    const guessesList = document.getElementById("guesses");
    guessesList.innerHTML = "";

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "none"; // Skryje obrázek při resetu hry

    // Aktualizace záhlaví <h1> po resetu hry
    playerNameHeader.textContent = `Uhádni číslo na dresu ${playerNames[randomNumber]}`;
}
