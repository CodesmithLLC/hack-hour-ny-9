/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  function binSearch(left, right) {
    // if (arr.length - 1 - index < Math.floor(index/2)) return false;
    if (left > right) return false;
    let index = left + Math.floor((right - left) / 2);
    if (arr[index] === target) return true;
    if (arr[index] < target) return binSearch(index + 1, right);
    if (arr[index] > target) return binSearch(left, index - 1);
    return false;
  }
  return binSearch(0, arr.length);
}

module.exports = findInOrderedSet;

// console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 2));