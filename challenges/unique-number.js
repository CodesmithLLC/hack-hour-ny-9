/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 * uniqueNumber([1,1,2,3,3]);
   uniqueNumber([1,2,2,3,3]);
   uniqueNumber([1,1,2,2,3])
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // sorting yields n log(n) time complexity
  let arr = array.sort((a,b) -> a-b);
  for (let i=0; i < arr.length; i+=2) {
    if (arr[i] !== arr[i+1]) {
      return arr[i+1] === arr[i+2] ? arr[i] : arr[i+1];
    }
  }
}

module.exports = uniqueNumber;
