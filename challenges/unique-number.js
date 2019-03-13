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

/*
//  O(n) time
function uniqueNumber(array) {
 let cache = {}
 for (let i = 0; i < array.length; i++) {
   if (cache[array[i]]) {
     cache[array[i]] += 1
   } else {
     cache[array[i]] = 1
   }
 }

 for (let i in cache) {
   if (cache[i] === 1) {
     return i;
   }
 }
}
*/

function uniqueNumber(array) {
  array.sort()
  console.log(array)
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] !== array[i + 1]) {
      return array[i]
    }
  }
}

console.log(uniqueNumber([1, 2, 1, 2, 3]))

module.exports = uniqueNumber;
