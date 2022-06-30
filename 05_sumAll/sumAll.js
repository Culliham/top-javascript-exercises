const sumAll = function(a, b) {
    let isNumbers = (typeof a == 'number' && typeof b == 'number');
    let isNonNegatives = (a>0 && b>0);

    let [smaller, greater] = a<b ? [a, b]: [b, a]; 

    let sum = 0;
    if (isNumbers && isNonNegatives) {
        for (let i=smaller; i<=greater; i++) {
            sum += i;
        }
        return sum;
    }
    
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
