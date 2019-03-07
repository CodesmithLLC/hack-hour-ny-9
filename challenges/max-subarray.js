/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let max_sum = Number.NEGATIVE_INFINITY;
    let cur_sum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i += 1) {
     const sum = arr[i] + cur_sum;
     // if including this number makes the sum SMALLER...just keep the current sum
     // ...but if including the number makes the sum LARGER, set current sum to the sum
     cur_sum = Math.max(arr[i], sum);
     // AFTER the current sum has been reassigned, check if the new current sum is greater than the max
     max_sum = Math.max(max_sum, cur_sum);
    }
    return max_sum;
    
}
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
