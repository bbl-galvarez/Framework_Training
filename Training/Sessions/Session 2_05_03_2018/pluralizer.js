function pluralize(nounvar, num1){

    var pluralform;
    
    if (num1 > 1){
        if (nounvar === 'goose'){
            pluralform = 'geese';
        }else if (nounvar === 'sheep'){
            pluralform = 'sheep';
        }else{
            pluralform = nounvar + 's'
        }
    } else{
        pluralform = nounvar
    }

    console.log(num1 + ' ' + pluralform);

}

pluralize('sheep', 1);
pluralize('dog', 5);
pluralize('goose', 1);