const reverseString = function(string) {
    let listString = string.split("");
    let reverse = [];
    for (let i = listString.length; i > 0; i--) {
        reverse.push(listString.pop());
    }
    console.log(reverse);
    let newString = reverse.join("")
    return newString
};

// Do not edit below this line
module.exports = reverseString;
