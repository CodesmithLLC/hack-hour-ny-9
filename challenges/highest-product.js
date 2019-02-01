/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const positive = array.sort((a, b) => b - a).filter(e => e > 0);
  const negative = array.sort((a, b) => a - b).filter(e => e < 0);

  if (negative.length >= 2 && negative[0] + negative[1] > positive[0]) {
    return negative[0] * negative[1] * positive[0];
  } else {
    return positive[0] * positive[1] * positive[2];
  }
}
console.log(highestProduct([9, -7, -11, -3, -22, -4]));

module.exports = highestProduct;
