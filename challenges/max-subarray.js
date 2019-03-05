/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let maxSum = Math.max();
  if (arr.length === 1) return arr[0];
  if (!arr.filter(el => el > 0)) return Math.max(arr);
  for (let i=0; i < arr.length; i++) {
     for (let j=i+1; j < arr.length; j++) {
        if (arr[i]+arr[j] > maxSum) {
          maxSum = arr[i]+arr[j];
        }
     }
  }
  return maxSum;
}

module.exports = maxSubarray;
