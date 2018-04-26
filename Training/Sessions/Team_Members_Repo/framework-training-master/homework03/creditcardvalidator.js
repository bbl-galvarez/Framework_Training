function validate(number) {

    var result = {};
    string = number.replace(/-/g, '');

    result.number = number;

    if (isNaN(string)) {
        result.valid = false;
        result.reason = 'Credit card number is not numeric';
        return result;
    }

    if (string.length != 16) {
        result.valid = false;
        result.reason = 'Credit card number is not 16 digits long';
        return result;
    }

    s = string[0];
    b = false;
    for (i = 1; i < string.length; i++) {
        if (s != string[i]) {
            b = true;
            break;
        }
    }
    if (!b) {
        result.valid = false;
        result.reason = 'Credit card number does not have at least 2 digits represented';
        return result;
    }

    s = string.substr(-1);
    if (s % 2 != 0) {
        result.valid = false;
        result.reason = 'Credit card number must have last digit as even number';
        return result;
    }

    s = 0;
    for (i = 0; i < string.length; i++) {
        s += parseInt(string[i]);
    }
    if (s <= 16) {
        result.valid = false;
        result.reason = 'Credit card number has digits that are less than or equal to 16';
        return result;
    }

    result.valid = true;

    return result;

}

if (!process.argv[2]) {
    console.log("No credit card number entered.")
    process.exit();
}

result = validate(process.argv[2]);

for (var key in result) {
    console.log(key + ": " + result[key]); 
}
