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
  for (let i = 0; i < array.length; i++) {
    if (array[i] == i) {
      return array[i]
    }
  }
}

module.exports = repeatNumbers;

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]))