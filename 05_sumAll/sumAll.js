const sumAll = function(num1, num2) {
    let sum = 0;
    let start = num1;
    let stop = num2;
    if ( num1 >= num2) {
        start = num2;
        stop = num1;
    } 
    if ( start < 0 || stop < 0) {
        return 'ERROR';
    }
    if ( Number.isInteger(start) === false || Number.isInteger(stop) === false ) {
        return 'ERROR';
    }
    for (let i = start; i <= stop; i++) {
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
