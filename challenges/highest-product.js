/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sorted = array.sort((a, b) => { return b - a });
  return sorted[0] * sorted[1] * sorted[2];
}


module.exports = highestProduct;
