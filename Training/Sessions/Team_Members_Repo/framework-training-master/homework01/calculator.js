consolidated(25);

/*halfNumber(20);
percentOf(2, 4);
squareNumber(5);
areaOfCircle(2);*/

function halfNumber(number) {
    result = number / 2;
    console.log("Half of " + number + " is " + result);
    return result;
}

function percentOf(number1, number2) {
    result = number1 / number2 * 100;
    console.log(number1 + " is " + result.toFixed(2)  + "% of " + number2);
    return result;
}

function squareNumber(number) {
    result = number * number;
    console.log("The result of squaring the number " + number + " is " + result);
    return result;
}

function areaOfCircle(number) {
    result = Math.PI * number * number;
    result = result.toFixed(2);
    console.log("The area for a circle with radius " + number + " is " + result);
    return result;
}

function consolidated(number) {
    halfresult = halfNumber(number);
    squareresult = squareNumber(halfresult);
    arearesult = areaOfCircle(squareresult);
    percentOf(squareresult, arearesult);
}