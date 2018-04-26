function calculateTip(total) {
    var tipPercent = 0.15;
    return (total * tipPercent);
}

var billTotal = 10.00;
var billTip = calculateTip(billTotal);
var receipt = "Total: " + billTotal + ". Tip: " + calculateTip(billTotal);
console.log(receipt);