const repeatString = function(string, numRepeat) {
  if (numRepeat > 0) {
    stringRepeat = string;
    for (i=0; i < numRepeat - 1; i++) {
      stringRepeat = stringRepeat.concat(string);
    }
  } else if (numRepeat < 0) {
    stringRepeat = 'ERROR';
  } else {
    stringRepeat = '';
  }

  return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
