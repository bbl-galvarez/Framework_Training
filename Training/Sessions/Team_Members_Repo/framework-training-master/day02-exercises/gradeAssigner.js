function calcCircumference(radius = 0) {
    console.log("The circumference is " + (2 * Math.PI * radius));
}

function calcArea(radius = 0) {
    console.log("The area is " + (Math.PI * Math.pow(radius, 2)));
}

calcCircumference(5);
calcArea(5);