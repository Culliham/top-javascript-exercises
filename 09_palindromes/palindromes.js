const palindromes = function (str) {
    str = str.toLowerCase();
    var indexLeft = 0;
    var indexRight = str.length - 1;

    var isPalindrome = true;

    while (indexLeft < indexRight) {
        if (!isLetter(str.at(indexLeft))) {
            ++indexLeft;
        } else if (!isLetter(str.at(indexRight))) {
            --indexRight;
        } else {
            if (str.at(indexLeft) != str.at(indexRight)) {
                isPalindrome = false;
            }
            indexLeft++;
            indexRight--;
        }
    }
    return isPalindrome;
};

const isLetter = function (char) {
    return char.length===1 && char.match(/[a-z]/i);
};

// Do not edit below this line
module.exports = palindromes;
