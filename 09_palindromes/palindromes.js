const palindromes = function (str) {
    let strToCheck = str.trim().toLowerCase().replace(/[\W_ ]/g,"");
    if ( strToCheck.length % 2 === 0 ) {
        let semidist = strToCheck.length / 2;
        for ( let i = 0; i <= semidist; i++ ) {
            if (strToCheck[semidist-i] !== strToCheck[semidist-1+i]) {
                return false;
            }
        }
        return true;
    }
    let semidist = Math.floor(strToCheck.length / 2);
    for ( let i = 0; i <= semidist; i++ ) {
        if (strToCheck[semidist-i] !== strToCheck[semidist+i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
