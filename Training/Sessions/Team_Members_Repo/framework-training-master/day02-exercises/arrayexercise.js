var choiceArray = ['red', 'pink', 'blue', 'red', 'green'];

for (var i = 0; i < choiceArray.length; i = i + 1) {
    console.log("My " + wording((i + 1)) + " choice is " + choiceArray[i]);
}

function wording(number) {

    if (number == 1) {
        word = "st";
    } else if (number == 2) {
        word = "nd";
    } else if (number == 3) {
        word = "rd" 
    } else {
        word = "th" 
    }

    return number + word;

}
