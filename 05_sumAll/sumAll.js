const sumAll = function(start, finish) {
    let sum = 0;
    if (start >= 0 && finish >= 0) {
        if (start <= finish) {
            for (let i = start; i <= finish; i++) {
             sum += i;
            }
        }
        else if (start > finish) {
            for (let i = start; i >= finish; i++) {
                sum += i;
            }
        }
        return sum;
    }
    else
        return ERROR;
};

// Do not edit below this line
module.exports = sumAll;
