/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.filter(el => el > 0).length === arr.length) return arr.reduce((acc, curr)=> acc += curr, 0);
  if (arr.filter(el => el < 0).length === arr.length) return Math.max(...arr);  
//   let currentMax = arr[0];
//   let i = 1;
//   while (i < arr.length) {
//     if (currentMax < arr[i]) {
//       currentMax = arr[i];
//     }
//     else {
//       currentMax += arr[i] ;
//     }
//     i++;
//   }
  let currentMax = Math.max();
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    for (let j=i; i < arr.length; j++) {
      for (let k=i; k <= j; k++) {
        sum += arr[k];
        if (currentMax < sum) {
          currentMax = sum;
        }
      }
    }
  }

  return currentMax;
}

module.exports = maxSubarray;
