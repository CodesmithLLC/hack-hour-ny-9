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
  const mode = { value: Number.NEGATIVE_INFINITY, count: 0 };
  const mean = { value: 0, sum: 0 };
  const cache = {};
  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];
    mean.sum += value;
    // i + 1 === number of elements so far
    mean.value = mean.sum / (i + 1);
    // check to see if current number is in cache
    if (value in cache) {
      cache[value] += 1;
      // if count is greater than the mode's count OR if the counts are equal and the number is greater than the mode
      if (
        cache[value] > mode.count ||
        (cache[value] === mode.count && value >= mode.value)
      ) {
        // reassign the mode
        mode.value = value;
        mode.count = cache[value];
      }
    } else {
      // if not, add the number as a property on the cache and set its value to 1
      cache[value] = 1;
      // but what if the mode's count is equal to 1 but the current value is greater?
      // [1,2,3,4,5] -> mode === 5
      if (value > mode.value && mode.count === 1) {
        // reassign the mode
        mode.value = value;
        // no need to reassign mode's count because it remains 1
      }
    }
  }
  // Math.floor the mean per the requirements and check if they're equal
  return mode.value === Math.floor(mean.value);
}

module.exports = modemean;

//[2,4,5,7,5]
