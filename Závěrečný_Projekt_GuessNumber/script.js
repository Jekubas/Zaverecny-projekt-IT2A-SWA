// Generujeme náhodné číslo mezi 1 a 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber);

// Funkce pro kontrolu uhádnutí čísla
function checkGuess() {
    // Získáváme hodnotu zadanou uživatelem
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    // Zobrazíme zprávu podle toho, zda bylo číslo uhádnuto správně
    const message = document.getElementById("message");
    const guessesList = document.getElementById("guesses");
    if (guess === randomNumber) {
        message.textContent = `Gratulujeme! Uhádl jsi číslo ${randomNumber} správně!`;
        message.style.color = "green";
        guessInput.disabled = true; // Zakážeme další zadávání čísla po uhádnutí
    } else if (guess < randomNumber) {
        message.textContent = "Zkus vyšší číslo.";
        message.style.color = "red";
        showArrow("up");
    } else {
        message.textContent = "Zkus nižší číslo.";
        message.style.color = "blue";
        showArrow("down");
    }

    
}


