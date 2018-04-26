verbing("go");
verbing("swim");
verbing("swimming");

function verbing(string) {

    if (string.length >= 3) {
        if (string.substring(string.length - 3) === "ing") {
            result = string + "ly";
        } else {
            result = string + "ing";
        }
    } else {
        result = string
    }

    console.log("Verbing of " + string + " is equal to " + result);

}