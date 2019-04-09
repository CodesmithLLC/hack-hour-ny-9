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
  let sum = (array.length - 1) * array.length / 2;
  for (let i = 0; i < array.length; i++) {
    sum -= array[i];
  }
  return Math.abs(sum);
}

// console.log(repeatNumbers([1, 2, 3, 4, 5, 3, 8, 7, 6]))

module.exports = repeatNumbers;
