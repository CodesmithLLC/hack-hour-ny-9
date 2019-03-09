/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // binary search
  if (target < Math.min(arr) || target > Math.max(arr)) return false;
  let mid = arr.length % 2 === 0 ? arr.length/2 : Math.floor(arr.length/2)
  // base case
  if (arr.length === 1 && arr[0] === target) return true;
  if (target > mid) findInOrderedSet(arr.slice(mid), target)
  if (target < mid) findInOrderedSet(arr.slice(0,mid), target)
  return false;
}


module.exports = findInOrderedSet;
