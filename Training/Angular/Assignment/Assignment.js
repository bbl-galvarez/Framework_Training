//Gustavo Alvarez Calculator homework

function squareNumber(num){
    var squarenum;

    squarenum = num * num;

    console.log('The result of squaring the number' + num + ' is ' + squarenum);

    return squarenum;

}

function halfNumber(num){
    var dividenum;

    dividenum = num / 2;

    console.log('Half of ' + num + ' is ' + squarenum);

    return dividenum;
}

function percentOf(num1, num2){
    var percentage;

    percentage = (num1 * 100);

    console.log(num1 + ' is ' + percentage + ' of ' + num2);

    return percentage;
}

function areaOfCircle(radiusnum){
    var area;

    area = 3.14 * radiusnum;

    area = Number(Math.round(area+'e2') + 'e-2')

    console.log('The area for a circle with a radius ' + radiusnum + ' is ' + area);

    return area;
}

function performAlloperations(num){

    var finalresult;

    finalresult = percentOf(areaOfCircle(squareNumber(halfNumber(num))),squareNumber(areaOfCircle(squareNumber(halfNumber(num)))));

}

performAlloperations(4);