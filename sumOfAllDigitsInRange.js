function sumOfAllDigitsInRange(l, r) {
    var sum = 0;
    for (var i = l; i <= r; i++) {
        sum += sumOfDigits(i);
    }
    return sum;
}

function sumOfDigits(number) {
    var digitsNumber = [],
        sum = 0;
    if (number < 10) {
        digitsNumber.push(number);
    }
    else {
        while (number > 0) {
            digitsNumber.push(number % 10);
            number = parseInt(number /= 10);
        }
    }
    digitsNumber.forEach(function (digit) {
        sum += digit;
    })
    return sum;
}
