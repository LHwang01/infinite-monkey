const alphabet = "abcdefghijklmnopqrstuvwxyz ";

onmessage = function(message)
{
    let generatedString = generateWord(message.data);
    
    while (generatedString != message.data) {
        generatedString = "";

        generatedString = generateWord(message.data);
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