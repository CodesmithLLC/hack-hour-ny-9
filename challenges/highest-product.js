/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
//[-3, -1, -2, 3, 8]
//[-100, -90, -5, -3, -2, 4, 6, 10, 12]
//[-100, -90, -80, -30, -2, -4, -6, -10, -12]
function highestProduct(array) {
  if (array.length < 3) return 0;
  if (array.length === 3) return array.reduce((acc, curr) => acc * curr, 1);
  let sorted = array.sort((a, b) => a - b);
  const smallest3 = sorted[0] * sorted[1] * sorted[sorted.length - 1];
  const biggest3 = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];
  return Math.max(smallest3, biggest3);

  // let sorted = array.sort((a, b) => a - b);
  // const allNegative = array.reduce((acc, curr) => acc && curr <= 0, true);
  // if (allNegative) {
  //   return sorted.slice(sorted.length - 3).reduce((acc, curr) => acc * curr, 1);
  // }
  // //if results are positive, return highest 3 of math abs
  // if (sortedAbs[0] * sortedAbs[1] * sortedAbs[2] > 0) return sortedAbs[0] * sortedAbs[1] * sortedAbs[2];

  // //positve * positive so get next biggest positive
  // if (sortedAbs[0] > 0 && sortedAbs[1] > 0) {
  //   for (let i = 2; i < sortedAbs.length; i++) {
  //     if (sortedAbs[i] > 0) {
  //       console.log("hello");
  //       return sortedAbs[0] * sortedAbs[1] * sortedAbs[i];
  //     }
  //   }
  //   return sortedAbs[0] * sortedAbs[1] * sorted[sorted.length - 3];
  // }
  // //negative * negative so get max positive
  // if (sortedAbs[0] < 0 && sortedAbs[1] < 0) {

  // }
  // //only one negative number in the array so skip it and get largest positives
  // if (sortedAbs[0] * sortedAbs[1] < 0) return sorted.slice(sorted.length - 3).reduce((acc, curr) => acc * curr, 1);
  // console.log(sortedAbs);
  // return 0;
  //[-200, 100, 50, -60]
}
////
// console.log(highestProduct([100, 90, -5, -3, -2, 4, 6, 10, 12]));


module.exports = highestProduct;
