//Gustavo Alvarez Mixup assignment

function mixUp(string1, string2){

    var modifiedstr1;
    var modifiedstr2;
    var finalmessage;

    modifiedstr1 = string1.substring(0,2) + string2.substring(2);
    modifiedstr2 = string2.substring(0,2) + string1.substring(2);

    finalmessage = modifiedstr1 + " " + modifiedstr2

    return finalmessage;

}

console.log(mixup('Mixup', 'To Get your'));