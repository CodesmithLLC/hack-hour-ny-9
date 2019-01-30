/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 *
 * [-7,3,-4,6]
 * [-7,-4,3,6,8]
 * [1,2,3,4]
 */

function highestProduct(array) {
  array.sort((a, b) => a - b);

  let maxProduct = 0;
  let result = [];
  for (let i = 0; i < array.length - 2; i += 1) {
    let lo = i + 1;
    let hi = array.length - 1;
    const runningProduct = array[i] * array[lo] * array[hi];
    if (runningProduct > maxProduct) {
      result.push([array[i], array[lo], array[hi]]);
      maxProduct = runningProduct;
    } else {
      lo += 1;
    }
  }
  return maxProduct;
}

console.log(highestProduct([1, 2, 3]));

module.exports = highestProduct;
