const findTheOldest = function (array) {
    const currentDate = new Date();

    array.sort((a, b) => {
        const previous = a.yearOfDeath
            ? a.yearOfDeath - a.yearOfBirth
            : currentDate.getFullYear() - a.yearOfBirth;
        const next = b.yearOfDeath
            ? b.yearOfDeath - b.yearOfBirth
            : currentDate.getFullYear() - b.yearOfBirth;
        return previous > next ? -1 : 1;
    });

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
