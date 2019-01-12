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
  const count = {};
  let sum = 0;
  array.forEach(el => {
    count[el] = count[el] ? count[el] + 1 : 1;
    sum += el;
  });
  const mean = Math.floor(sum / array.length); 
  const keys = Object.keys(count);
  const mode = keys.reduce( (max, key) => {
    if (count[key] > count[max] || (count[key] === count[max] && key > max)) return key;
    return max;
  })
  return Number(mode) === mean;
}

module.exports = modemean;
