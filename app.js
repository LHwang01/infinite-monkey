const alphabet = "abcdefghijklmnopqrstuvwxyz ";

function getText() {
    setInterval(monkeyStart, 10);
}

function monkeyStart() {
    let text = document.getElementById('input').value.toLowerCase();
    let generatedString = generateWord(text);
    
    while (generatedString != text) {
        generatedString = "";

        generatedString = generateWord(text);
    }

    alert("Exited!");
}

function generateWord(text) {
    let generatedWord = "";

    for (let i = 0; i < text.length; i++) {
        let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

        generatedWord += randomCharacter;
    }

    return generatedWord;
}