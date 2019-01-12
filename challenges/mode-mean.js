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
  let mapObj = {
    sum: 0
  };
  array.reduce((acc, curr) => {
    acc.sum += curr;
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    if (!acc.mode) {
      acc.mode = curr;
    }
    if (acc[curr] > acc[acc.mode]) {
      acc.mode = curr;
    }
    return acc;
  }, mapObj);
  let mean = mapObj.sum / array.length;
  return mapObj.mode === mean;
}

console.log(modemean([1, 1, 2], 1));
module.exports = modemean;
