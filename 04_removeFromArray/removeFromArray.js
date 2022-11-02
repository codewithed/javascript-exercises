const removeFromArray = function(arr, ...args) {
    let newArr = arr;

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (args.includes(newArr[i]))
                newArr.splice(i, 1);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
