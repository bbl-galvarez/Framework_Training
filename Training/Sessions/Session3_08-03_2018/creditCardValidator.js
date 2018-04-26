//Gustavo Alvarez - The Credit Card Validator

var validCard = false;
var failureReason = "";
const readline = require('readline');

const getinput = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

function creditCardValidator(cardNo){

    validCard = false;
    var newCard;

    newCard = cardNo.replace(new RegExp('-', 'g'), '');
   
    if (newCard.length != 16){
        failureReason = " Card Length is Not 16 bytes";
        return;
    }
    
    if (!newCard.isNaN()){
        failureReason = " Card Length is Numeric";
        return;
    }

    var ValueNum;

    Valuenum = newCard.substr(15,1);

    Valuenum = valuenum % 2;

    if (Valuenum != 0){
        failureReason = " Last Byte of Card No is not EVEN";
        return false;
    }

    var firstDigit = substr(newCard,1, 1);
    var currDigit;

    for (var i = 0; i < cardNo.length; i++) {
        
        currDigit = cardno[i]
        
        if (firstDigit != currDigit){
            break;
        }
        failureReason = " The Card cannot have the same digit for all 16 characters";
        return;
    }

validCard = true;

}

console.log("Welcome to the Alvarez Credit Card Validator");
console.log("Please Enter a Credit Card Number:");
console.log("");

getinput.question("Please enter valid credit card number...", (answer) =>{
creditCardValidator(answer);

});

//if (validCard == true){
//    console.log("The Card Number is Valid");
//}else{
 //   console.log("The Card Number is invalid because: " + failureReason);
//}