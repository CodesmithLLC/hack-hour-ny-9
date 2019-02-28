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
  const n = array.length - 1;
  const sum = ((1 + n) * n) / 2;

  const actualSum = array.reduce((acc, element) => acc + element, 0);

  return actualSum - sum;
}

console.log(repeatNumbers([1, 2, 3, 4, 4]));

module.exports = repeatNumbers;
