/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modeMean(array) {
  let theMode = mode(array);
  let theMean = Math.floor(mean(array));

  if (theMode.length > 1){
    theMode = findMax(theMode);
  }

  return theMode === theMean
}

// console.log(modeMean([4, 4, 4, 4, 9]));


// console.log(mode([1, 2, 3, 4, 6, 3, 8, 10, 2]));
function mode(array){
  var singles = [];
  var doubles = [];

  for (var i = 0; i < array.length; i++){
    var currentEle = array[i];
    if (!singles.includes(currentEle)){
      singles.push(currentEle);
    } else {
      doubles.push(currentEle);
      console.log(doubles);
    }
  }
  return doubles
}

// console.log(mean([1, 2, 3, 4]));
function mean(array){
  var sum = 0;

  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }

  return sum / array.length;
}


// console.log(findMax([1,2,3,2,9,1,100,3,6]));
function findMax(array){
  var largest = null;;

  for (var i = 0; i < array.length; i++){
    if (largest === null || array[i] > largest){
      largest = array[i];
    }
  }
  return largest
}


module.exports = modemean;
