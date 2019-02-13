/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let neg = [];
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  for (let p = 0; p < pos.length; p++) {
    if (arr.indexOf(n - pos[p]) !== -1) {
      return true;
    }
  }

  for (let g = 0; g < neg.length; g++) {
    if (arr.indexOf(n - neg[n]) !== -1) {
      return true;
    }
  }
  return false;
}

module.exports = twoSum;

console.log(twoSum([1, -2, 7, -8, 9, 10], 4));
