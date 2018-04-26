function pluralize(noun, number) {

    if (number == 1) {
        return number + " " + noun; 
    } else {
        if (noun == "sheep") {
            return number + " " + "sheep"; 
        } else if (noun == "goose") {
            return number + " " + "geese"; 
        } else {
            return number + " " + noun + "s"; 
        }        
    }

}

console.log(pluralize("cat" , 5));
console.log(pluralize("dog" , 1));
console.log(pluralize("sheep" , 1));
console.log(pluralize("sheep" , 3));
console.log(pluralize("goose" , 1));
console.log(pluralize("goose" , 8));
