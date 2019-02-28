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
    array.sort((a, b) => a -b)
    for ( let i = 0; i < array.length; i++) {
        if ( array[i] === array[i + 1]){
            return array[i]
        }
    }
}

// console.log(repeatNumbers([1,2,3,2,4,5]))

module.exports = repeatNumbers;
