const removeFromArray = function(mainArray, ...extras) {
  //for (j in mainArray) {
    //for (i in extras) {
      //if (mainArray[j] === extras[i]) {
        //mainArray.splice(j, 1);
        //console.log(mainArray);
      //}
    //}
  //}

  for (i = 0; i < mainArray.length; i++) {
    for (j = 0; j < extras.length; j++) {
      if (mainArray[i] === extras[j]) {
        console.log(mainArray.splice(i, 1));
        i--; // decrement to hold current index when removing
      }
    }
  }
  return mainArray;
};

//test = removeFromArray([1, 2, 2, 2, 3], 2, 4);
//console.log(test);

// Do not edit below this line
module.exports = removeFromArray;
