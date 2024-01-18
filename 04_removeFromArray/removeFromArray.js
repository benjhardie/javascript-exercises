const removeFromArray = function(array, ...values) {

    for (value of values) {
        for (let index = 0; index <= array.length - 1; index++) {
            if (array[index] === value) {
                array.splice(index, 1);
                break;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
