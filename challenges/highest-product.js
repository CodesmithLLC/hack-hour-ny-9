/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
//[-3, -1, -2, 3, 8]
//[-100, -90, -5, -3, -2, 4, 6, 10, 12]
//[-100, -90, -80, -30, -2, -4, -6, -10, -12]
function highestProduct(array) {
  if (array.length <= 3) return array.reduce((acc, curr) => acc * curr, 1);
  let sortedAbs = array.sort((a, b) => Math.abs(b) - Math.abs(a));
  let sorted = array.sort((a, b) => a - b);
  const allNegative = array.reduce((acc, curr) => acc && curr < 0, true);
  if (allNegative) {
    // console.log(sorted);
    return sorted.slice(sorted.length - 3).reduce((acc, curr) => acc * curr, 1);
  }
  //negative * negative so get max positive
  if (sortedAbs[0] * sortedAbs[1] > 0) return sortedAbs[0] * sortedAbs[1] * sorted[sorted.length - 1];
  //only one negative number in the array so skip it and get largest positives
  if (sortedAbs[0] * sortedAbs[1] < 0) return sorted.slice(sorted.length - 3).reduce((acc, curr) => acc * curr, 1);
  return 0;
  //[-200, 100, 50, -60]
}
//
// console.log(highestProduct([-100, -90, -5, -3, -2, 4, 6, 10, 12]));


module.exports = highestProduct;
