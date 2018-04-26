//Gustavo Alvarez - The Word Guesser

var answerword = ['F','O', 'X'];
var useranswer = [];
var totalguessed = 0;
var endgame = false;
const readline = require('readline');

const getinput = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

function guessLetter(guessedletter){

    for (var i = 0; i < answerword.length; i++) {
        if (guessedletter === answerword[i]){
            useranswer.push(guessedletter);
            totalguessed = totalguessed + 1;

            if (totalguessed == answerword.length){
                console.log('Congratulations! You have won the game!');
                endgame = true;
            }else{
                console.log('You need ' + (answerword.length - totalguessed) + ' more letters to win the game! Good luck!');
            }

        }else{
            //console.log("Letter did not match");
        }
    }

}

console.log("Welcome to the Alvarez guessing game");
console.log("Please try to guess the correct word");
console.log("");

console.log("The letter entered is: O");
guessLetter("O");

console.log("The letter entered is: F");
guessLetter("F");

console.log("The letter entered is: P");
guessLetter("P");

console.log("The letter entered is: R");
guessLetter("R");

console.log("The letter entered is: X");
guessLetter("X");

//while (endgame == false){
//    console.log("Loop");
 //   getinput.question("Please try to guess a correct letter...", (answer) =>{
  //      guessLetter(answer);
  //  });
//}