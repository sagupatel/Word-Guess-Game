var mysteryWord = ['','turtle','tortoise','shark','whale',
                        'octopus','squid','starfish','moray','stingray','urchin'
                        ,'coral','anemone','sponge','clownfish']
var placeholders = []
var guessCounter = 6;
var guessedLetters = []
var badGuess = false
var win = false;


var randNum = Math.floor(Math.random() *10 + 1); 
var selectedWord = mysteryWord[randNum]

function create_placeholders(word){
    for(i in word){
        placeholders.push('___')
    }
    return placeholders
}

var placeholders = create_placeholders(selectedWord);
var placeholders_div = document.getElementById("placeholders");
var letters_guessed_div = document.getElementById("letters-already-guessed")
placeholders_div.textContent = placeholders;

var attempts_remaining_div = document.getElementById("attempts-left")
attempts_remaining_div.textContent = guessCounter;

document.addEventListener('keypress', (event) => {
    let letter = String.fromCharCode(event.keyCode);
    if(guessedLetters.indexOf(letter) == -1){
        guessedLetters.push(letter)
        badGuess= true;

    }
    for(i in selectedWord){
        if (letter == selectedWord[i]){
            placeholders[i] = selectedWord[i]
            badGuess = false;
        }
     
    }
    if(badGuess == true){
        guessCounter--;
    }
    badGuess = false;

    for(i = 0; i<placeholders.length;i++){
        if(placeholders.indexOf('___') == -1){
            win = true;
        }
    }
    if(win == true)
    {
        alert("Congrats Your a Winner")
    }
    
    // Update Game display with new values
    attempts_remaining_div.textContent = guessCounter
    placeholders_div.textContent = placeholders;   
    letters_guessed_div.textContent = guessedLetters;             
})



