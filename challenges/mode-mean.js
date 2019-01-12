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
  let mean = Math.floor(array.reduce((acc, curr) => acc + curr, 0)/array.length);
  let obj = array.reduce(function(acc,curr) {
    if (acc[curr]) {
      acc[curr]++;
      return acc;
    } else {
      acc[curr] = 1;
      return acc;
    }
  }, {});

  let entries = Object.entries(obj);
  let maxCount = 0;
  let mode;
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] >= maxCount) {
      maxCount = entries[i][1];
      mode = entries[i][0];
    }
  }
  // console.log(mode, mean);
  return mode == mean;
  // return Object.keys(obj)[values.indexOf(maxCount)] === mean;
}
// let arr = [1,1,1,1,1,1];
// console.log(modemean(arr));

module.exports = modemean;
