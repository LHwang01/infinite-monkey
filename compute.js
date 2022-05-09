const alphabet = "abcdefghijklmnopqrstuvwxyz ";

onmessage = function (message) {
    let messageValue = message.data;
    let generatedString = generateWord(messageValue);

    while (generatedString != messageValue) {
        generatedString = "";

        generatedString = generateWord(messageValue);
    }

    console.log("Exited!");
}

function generateWord(text) {
    let generatedWord = "";

    for (let i = 0; i < text.length; i++) {
        let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

        generatedWord += randomCharacter;
    }

    return generatedWord;
}