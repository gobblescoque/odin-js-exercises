const repeatString = function(string, numReapeat) {
  stringRepeat = string;
  for (i=0; i < numReapeat - 1; i++) {
    stringRepeat = stringRepeat.concat(string);
  }

  return stringRepeat;

};

// Do not edit below this line
module.exports = repeatString;
