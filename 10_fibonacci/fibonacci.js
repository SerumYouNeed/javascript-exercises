const fibonacci = function(stop) {
    if ( stop < 0) return "OOPS";
    if (typeof stop === String) {
        let stop = Number(stop);
    }
    let newArr = [0, 1];
    for (let i = 1; i <= stop; i++) {
        newArr.push(newArr[i] + newArr[i-1]);
    }
    return newArr[stop]
};

// Do not edit below this line
module.exports = fibonacci;
