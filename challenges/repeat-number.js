/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  const nSum = ((array.length - 1) * (1 + (array.length - 1))) / 2;
  const arraySum = array.reduce((acc, curr) => acc + curr);
  return arraySum - nSum;
}

console.log(repeatNumbers([1, 3, 2, 3]));
module.exports = repeatNumbers;
