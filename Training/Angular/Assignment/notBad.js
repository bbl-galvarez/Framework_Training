//Gustavo Alvarez not bad assignment

function notBad(string1){
    
    var notstring;
    var badstring;
    var finalstring;

    not = string1.indexOf("not");
    bad = string1.indexOf("bad");

    if ((not >0) && bad > not){
        finalstring = string1.replace("not bad", "good" );
    }else{
        finalstring = string1;
    } 

    return finalstring;

}

console.log("this is not bad gus");