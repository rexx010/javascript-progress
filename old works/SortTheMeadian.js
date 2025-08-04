const mergeNumbers = function(number1, number2) {
    for(let i = 0; i < number2.length; i++) {
        number1.push(number2[i]);
    }

    number1.sort((a, b) => a - b);
    console.log(number1);
    let medianIndex = Math.floor(number1.length / 2);
    if (number1.length % 2 === 0) {
        return (number1[medianIndex - 1] + number1[medianIndex]) / 2;
    } else {
        return number1[medianIndex];
    }

}

number1 = [10, 6, 78, 93]
number2 = [2, 56, 21, 6, 8]
console.log(mergeNumbers(number1, number2))
