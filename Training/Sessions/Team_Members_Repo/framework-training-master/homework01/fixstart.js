fixStart("babble");

function fixStart(string) {

    char = string.substring(0, 1);
    regex = new RegExp(char, "g");
    newstring = char + string.substring(1).replace(regex, "*");

    console.log("The fix start of " + string + " is " + newstring);

}