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
  const objOfNums = {};
  for (let num of array) {
    if (objOfNums[String(num)] === true) return num;
    else objOfNums[String(num)] = true;
  }
}

module.exports = repeatNumbers;
