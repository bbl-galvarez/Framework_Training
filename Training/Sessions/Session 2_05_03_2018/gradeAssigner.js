//Gustavo Alvarez lesson 2 05/03/2018

function calcCircumference(radiusval){
    var circum;

    circum = Math.PI * (radiusval * 2);

    console.log('The circumference is: ' + circum);
}

function calcArea(radiusval2){
    var areaval;

    areaval = Math.PI * (radiusval2 * radiusval2);

    console.log('The area is: ' + areaval);
}

calcCircumference(5);
calcArea(10);