const palindromes = function (string) {
    let cleanString = string.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
    return cleanString === cleanString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
