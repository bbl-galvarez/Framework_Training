//Gustavo Alvarez Fix start assignment

function fixStart(string1){
    
    var replacedstring;

    replacedstring = string1.substring(1).split(string1[0].join("*"));
    replacedstring = string1[0] + replacedstring;

    return replacedstring;

}

console.log(fixStart('GusGa'))