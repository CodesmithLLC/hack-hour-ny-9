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


function modemean(array) {
  if (array.length === 0) return undefined;

  let arraySum = 0;
  let elementCounts = {};

  array.forEach((ele) => {
    // iterate through array and sum all elements
    arraySum += ele;

    // iterate through array and check for number of times each element appears in array. save to temp storage.
    if (elementCounts[ele]) {
      elementCounts[ele]++;
    } else {
      elementCounts[ele] = 1;
    }
  })

  const mean = Math.floor(arraySum / array.length);
  const processMode = function () {
    let highestCount = 0;

    for (let key in elementCounts) {
      if (elementCounts[key] > highestCount) {
        highestCount = key;
      }
    }

    return parseInt(highestCount);
  }
  const mode = processMode();

  if (mean === mode) {
    return true;
  }

  return false;

}


module.exports = modemean;
