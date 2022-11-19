const findTheOldest = function(arr) {

    const date = new Date();

    // add ages to each item
    arr.forEach(item => {
        if (!item.yearOfDeath)
            item.age = date.getFullYear() - item.yearOfBirth;
        else 
            item.age = item.yearOfDeath - item.yearOfBirth;
    });

    // get the oldest age
    const oldest = arr.reduce((currentOldest, item) => {
        if (item.age > currentOldest)
            currentOldest = item.age;
        return currentOldest;
    }, 0);

    const res = arr.find((item) => {
        return item.age === oldest;
    });

    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
