/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = arr[0];
  let runningMax = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    runningMax = Math.max(runningMax + arr[i], arr[i]);
    max = Math.max(runningMax, max);
    console.log('running', runningMax);
    console.log('max', max);
  }
  return max;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
// console.log(maxSubarray([15, 20, -5, 10]));

module.exports = maxSubarray;
