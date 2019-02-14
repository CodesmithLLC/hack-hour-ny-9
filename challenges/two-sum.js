/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length === 1) return true;
  for (let i=0; i < arr.length; i++) {
    if (Array.indexOf(n - arr[i]) >= 0) return true
  }
  return false;
}

module.exports = twoSum;
