var choicesArray = [
    'black', 'blue', 'brown', 'white'
    ];

var choice;


for (var i = 0; i < choicesArray.length; i = i + 1){

    if (i = 0){
        choice = ' first '
    }else if (i = 1){
        choice = ' second '
    }else if (i = 1){
        choice = ' third '
    }else{
        choice = 'final '
    }

    console.log('My ' + choice + 'is ' + choicesArray[i]);

}