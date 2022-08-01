const ftoc = function(num) {
  result = (num-32)*5/9;
  formattedResult = Math.round((result + Number.EPSILON)*10)/10;
  return formattedResult;
};

const ctof = function(num) {
  result = 9/5*num + 32;
  formattedResult = Math.round((result + Number.EPSILON)*10)/10;
  return formattedResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

