var wordtoguess = ['F', 'O', 'L', 'D'];
var lettersguessed = ['A', 'F', 'L', 'X', 'D', 'O'];

//var wordtoguess = ['J', 'A', 'C', 'K'];
//var lettersguessed = ['A', 'F', 'L', 'X', 'D', 'O', 'Z'];

var rewardamount = 0;
var consolidatedrewardamount = 0;
var guessedcorrect = false;
var wronguesses = 0;

var currentlettersguessed = new Array(wordtoguess.length);

function guessLetter(letterToProcess) {

    console.log("Processing " + letterToProcess + "...");
    guessedcorrect = false;

    for (ii = 0; ii < currentlettersguessed.length; ++ii) {

        if (!currentlettersguessed[ii]) {
            
            if (letterToProcess == wordtoguess[ii]) {
                guessedcorrect = true;
                currentlettersguessed[ii] = letterToProcess;
            }

        }

    }

    rewardamount = Math.floor(Math.random() * 10) + 1;
    if (guessedcorrect) {

        consolidatedrewardamount = consolidatedrewardamount + rewardamount;

        var string = "";
        for (iii = 0; iii < currentlettersguessed.length; ++iii) {
            if (currentlettersguessed[iii]) {
                string = string + currentlettersguessed[iii];
            } else {
                string = string + "_";
            }
            string = string + " ";
        }

        console.log("Congrats. Letter " + letterToProcess + " exists in word. " + "Your reward has increased by " + rewardamount + " to " + consolidatedrewardamount + ". Word guessed so far: " + string);

    } else {

        wronguesses++;
        consolidatedrewardamount = consolidatedrewardamount - rewardamount;
        console.log("Letter does not exist in word. Your reward has decreased by " + rewardamount + " to " + consolidatedrewardamount + ". You have " + (6 - wronguesses) + " guesses remaining");

    }

}

for (i = 0; i < lettersguessed.length; ++i) {

    guessLetter(lettersguessed[i]);
    
    if (wronguesses == 6) {
        break;
    }

}

if (wordtoguess.toString() === currentlettersguessed.toString()) {
    console.log("Congrats! You have guessed all the letters! Your final rewards is " + consolidatedrewardamount);
} else {
    console.log("Sorry. You did not guess all the letters. Your final rewards is " + consolidatedrewardamount);
}