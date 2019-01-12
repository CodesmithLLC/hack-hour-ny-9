/*
 * Given an array of eles, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const sum = findSum(array);
  const arrayMean = Math.floor(sum / array.length);
  const arrayMode = findMode(array);

  if (arrayMean === arrayMode) return true;
  return false;
}

function findSum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function findMode(array) {
  const modeContainer = {};
  let highest = 0;
  let mode = 0;

  array.forEach((ele) => {
    modeContainer[ele] = (modeContainer[ele] || 0) + 1;
    if (highest < modeContainer[ele]) {
      highest = modeContainer[ele];
      mode = ele;
    }
  });
  return mode;
}
console.log(modemean([5, 5]));

module.exports = modemean;