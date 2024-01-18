const sumAll = function (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    }

    const rangeStart = x < y ? x : y;
    const rangeEnd = x > y ? x : y;

    let sum = 0;
    for (let num = rangeStart; num <= rangeEnd; num++) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
