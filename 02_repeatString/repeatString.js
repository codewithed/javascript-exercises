
function repeatString(string, num) {
    let res = "";
    if (num === 0 || string.length === 0) {
        return "";
    }
    if (num < 0)
        return "ERROR";
    for (let j = 0; j < num; j++)
    {
        res += string;
    }

    return res;
}

// Do not edit below this line
module.exports = repeatString;
