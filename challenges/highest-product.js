/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  const sorted = array.sort((a, b) => { return b - a });
  console.log(sorted)
  return sorted[0] * sorted[1] * sorted[2];
}


module.exports = highestProduct;
