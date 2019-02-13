/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || isNaN(n)) return false;
  let result = false;
  const dfs = (arr, target, index, curSum, count) => {
    if (curSum === target) {
      result = true;
      return;
    } 
    for (let i = index; i < arr.length && count < 3 && result === false; i++) {
      dfs(arr, target, i + 1, curSum + arr[i], count + 1);
    }
  }
  dfs(arr, n, 0, 0, 0);
  return result;
}

module.exports = twoSum;
