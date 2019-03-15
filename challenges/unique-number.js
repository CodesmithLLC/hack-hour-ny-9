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
//=======================================Ryan================================================


function uniqueNumber(array) {
   const store = {};
   
   for (let i = 0; i < array.length; i += 1) {
     if (array[i] in store) {
       delete store[array[i]];
     } else {
       store[array[i]] = true;
     }
   }
   
   return Object.keys(store)[0];
 }
 // Bitwise XOR O(n)
 // When an integer is XOR compared against itself, the result is always zero
 // 0 ^ 0 -> 0
 // 3 ^ 3 -> 0
 // 666 ^ 666 -> 0
 // since each duplicate will appear EXACTLY twice, and there is only ONE unique number...
 function uniqueNumber(array) {
   let result = 0;
   for (let i = 0; i < array.length; i += 1) {
     // XOR compare every element in the array...
     result = result ^ array[i];
   }
   // ...each duplicate will cancel itself out and only the unique will remain
   return result;
 }
 // uniqueNumber([1,2,1,3,3]); // 2
 // uniqueNumber([3,3,12,4,12,4,5]); // 5