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
  let current = array[0]
  for (let i = 1; i < array.length; i++) {
    if (current === array[i]) {
      return current
    }
  }
  return repeatNumbers(array.splice(1, array.length))
}

module.exports = repeatNumbers;
