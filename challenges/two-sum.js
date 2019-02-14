/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    const arrWithoutIthNum = arr.slice();
    arrWithoutIthNum.splice(i, 1);
    if (arrWithoutIthNum.includes(n - arr[i])) return true;
  }

  return false;
}

module.exports = twoSum;
