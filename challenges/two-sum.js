/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) {
    return false;
  }

  let difference = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (difference.has(arr[i])) {
      return true;
    } else {
      difference.add(n - arr[i])
    }
  }

  return false;
}

module.exports = twoSum;
