function calculateTip(total){
    var tipPercent = 0.15;
    return (total * tipPercent);
}

var billTotal = 10.00;
var billTip = calculateTip(billTotal);
console.log('Total: ' + billTotal + ' Tip: ' + billTip);

var age = 14;
if (age > 16){
    console.log('Yes you can drive Gus')
}else{
    console.log("Sorry you cant drive boss u need at least" + (age-16) + " more years")
}