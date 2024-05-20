<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uhádni číslo</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <a href="index.html">
        <img style="float: right;" src="minilogo.jpg" alt="Logo" width="100" height="50">
      </a>
    <div class="container">
        <h1 id="playerNameHeader"></h1>
        <p>Uhádni číslo mezi 1 a 100:</p>
        <input type="number" id="guessInput">
        <button onclick="checkGuess()">Odeslat</button>
        <button onclick="resetGame()">Reset</button>
        <div id="message"></div>
        <table id="guessTable">
            <thead>
                <tr>
                    <th>Čísla</th>
                    <th>Větší/Menší</th>
                </tr>
            </thead>
            <tbody id="guesses"></tbody>
        </table>
        <div id="imageContainer" style="display: none;">
            <img id="resultImage" src="" alt="Correct">
        </div>
    </div>
    <script src="script.js"></script>

    

    
</body>
</html>
