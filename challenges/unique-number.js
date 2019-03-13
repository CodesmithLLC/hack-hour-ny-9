/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
   array.sort((a,b) => a - b);
   for ( let i = 0; i < array.length; i++) {
       if (array[i] !== array[i + 1] && array[i] !== array [i - 1]){
          return array[i]
       }
   }
}
console.log(uniqueNumber([1,2,6,1,3,2,3,5,6,7,7]))

module.exports = uniqueNumber;
