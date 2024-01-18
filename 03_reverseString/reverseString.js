const reverseString = function (string) {
    arrString = string.split("");
    arrReverse = [];
    for (char of arrString) {
        arrReverse.unshift(char);
    }
    return arrReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
