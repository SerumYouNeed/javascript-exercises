const removeFromArray = function(arr, ...theArgs) {
    const newArr = [];
    for ( const x of arr ) {

        if ( theArgs.includes(x) ) {
            continue;
        } else {
            newArr.push(x);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
