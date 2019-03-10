/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let allNums = {};
  for (let i = 0; i < arr.length; i++) {
    if (allNums[arr[i]]) return true;
    allNums[n - arr[i]] = true;
  }
  return false;
}

console.log(twoSum([13, 5, 8, 12, 11, 2, 1], 26))

module.exports = twoSum;
