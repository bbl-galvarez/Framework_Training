//Gustavo Alvarez Verbing assignment

function verbing(string1){

    var endresult;

    if(string1.length >= 3){
        if (string1.endsWith("ing")){
            endresult = string1 + 'ly';
        }else{
            endresult = string1 + 'ing';
        }
        
    }else{
        endresult = string1;
    }

    return endresult;

}

console.log(verbing("StrangeString"));