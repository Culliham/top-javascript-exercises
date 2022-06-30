const repeatString = function(str, num) {
    var resultString = "";
    if (num<0) {
        resultString = "ERROR";
    } else {
        for (let i=0; i<num; i++) {
            resultString += str;
        }
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
