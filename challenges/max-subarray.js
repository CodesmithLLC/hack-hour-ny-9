/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = Math.max(...arr)
  let sliced;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i < j) {
        sliced = arr.slice(i, j)
        console.log(sliced)
        sliced = sliced.reduce((acc, curr) => acc + curr)
        console.log(sliced)
        if (sliced > max) {
          max = sliced
        }
      }
    }
  }
  sliced = arr.reduce((acc, curr) => acc + curr)
  if (sliced > max) {
    max = sliced
  }
  return max
}


module.exports = maxSubarray;
