const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(arr) {
	return arr.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(arr) {
  return arr.reduce((partialProduct, a) => partialProduct*a, 1);
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
  if ((num==1) || (num==0)) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
