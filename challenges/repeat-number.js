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
    const targetSum = 0.5 * ((array.length)-1) * array.length;
    // reduce contributes O(n) time complexity
    const arraySum = array.reduce((acc, curr) => acc+=curr, 0);
    return arraySum - targetSum;
}

module.exports = repeatNumbers;
