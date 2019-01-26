/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
// var subsets = function(nums, target) {
//   let result = 0;
//   dfs(nums, 0, [], 0, target);
//   console.log(result);
//   return result === target;
// };

// const dfs = (nums, result, temp, start, target) => {
//   if (temp.length) {
//     const tempRes = temp.reduce((a, b) => a + b);
//     if (tempRes === target) {
//       console.log('result', result);
//       result = tempRes;
//     }
//   }
//   for (let i = start; i < nums.length; i++) {
//     temp.push(nums[i]);
//     dfs(nums, result, temp, i + 1, target);

//     temp.pop();
//   }
// };
// console.log(subsets([3, 34, 4, 12, 5, 12], 32));

const subsetSum = (array, target) => {
  if (!target) return true;
  if (!array.length) return false;
  return subsetSum(
    array.slice(1),
    target - array[0] || subsetSum(array.slice(1), target)
  );
};
module.exports = subsetSum;
