notBad("This dinner is not that bad!");
notBad("This dinner is not so bad!");
notBad("This dinner is bad!");
notBad("not bad Gustavo!");

function notBad(string) {

    indexnot = string.indexOf("not");
    indexbad = string.indexOf("bad");

    if ((indexnot > -1 && indexbad > -1) && (indexnot < indexbad)) {
        result = string.substring(0, indexnot - 1) + " good" + string.substring(indexbad + 3);
    } else {
        result = string;
    }

    console.log("The result of putting string " + string + " through this function is " + result);

}