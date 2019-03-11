/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let middle = Math.floor(arr.length / 2)

  if (middle === 0) return false
  if (target < arr[middle]) {
    arr = arr.slice(0, middle)
  } else if (target > arr[middle]) {
    arr = arr.slice(middle, arr.length)
  } else if (target === arr[middle]) {
    return true;
  }
  return findInOrderedSet(arr, target)
}
console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 2))


module.exports = findInOrderedSet;
