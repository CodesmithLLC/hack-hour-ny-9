/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let neg = [];
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
      console.log(arr[i]);
    } else {
      neg.push(arr[i]);
      console.log(arr[i]);
    }
  }

  for (let p = 0; p < pos.length; p++) {
    if (pos.indexOf(n - pos[p]) !== -1 && pos.indexOf(n - pos[p]) !== p) {
      return true;
    } else if (neg.indexOf(n - pos[p]) !== -1) {
      return true;
    }
  }

  for (let g = 0; g < neg.length; g++) {
    if (neg.indexOf(n - neg[g]) !== -1 && neg.indexOf(n - neg[g]) !== g) {
      return true;
    } else if (pos.indexOf(n - neg[g]) !== -1) {
      return true;
    }
  }
  return false;
}

module.exports = twoSum;

console.log(twoSum([2, 4, 5, -3, -10, 20], 4));
