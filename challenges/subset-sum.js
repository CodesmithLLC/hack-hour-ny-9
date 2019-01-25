/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let success = 0;
  const helper = (array, index, curTotal) => {
    if (curTotal === target) success += 1;

    for (let i = index; i < array.length && success < 1; i++) {
      const newTotal = curTotal + array[i];
      helper(array, i + 1, newTotal);
    }
  }
  
  helper(array, 0, 0);
  return success > 0;
}

module.exports = subsetSum;
