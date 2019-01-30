/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 *
 * [-7,3,-4,6]
 * [-7,-4,3,6,8]
 * [1,2,3,4]
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  let maxProduct = -Infinity;
  function dfs(nums, runningProduct, index, count) {
    //base case
    if (count === 3) {
      maxProduct = Math.max(maxProduct, runningProduct);
      return;
    }
    // else
    for (let i = index; i < nums.length; i += 1) {
      dfs(nums, runningProduct * nums[i], i + 1, count + 1);
    }
  }
  dfs(array, 1, 0, 0);
  return maxProduct;
}

console.log(highestProduct([1, 2, 3, 9]));

module.exports = highestProduct;
