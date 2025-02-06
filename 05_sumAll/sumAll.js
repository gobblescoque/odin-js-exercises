const sumAll = function(int1, int2) {
  let sum = 0;
  let intSmaller;
  let intBigger;

  if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  } else if (int1 % 1 !== 0 || int2 % 1 !== 0 ) {
    return 'ERROR';
  } else if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    return 'ERROR';
  }

  if (int1 > int2) {
    intBigger = int1;
    intSmaller = int2;
  } else {
    intBigger = int2;
    intSmaller = int1;
  }

  for (let i = intSmaller; i <= intBigger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
