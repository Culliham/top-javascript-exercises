const leapYears = function(num) {
    isMultipleOf4 = num%4==0;
    isMultipleOf100 = num%100==0;
    isMultipleOf400 = num%400==0;

    return ((isMultipleOf4 && !isMultipleOf100) || isMultipleOf400);

};

// Do not edit below this line
module.exports = leapYears;
