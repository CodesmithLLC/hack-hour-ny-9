/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let i = Math.floor(arr.length/2)
  if ( target === arr[i]) return true
  if (target > arr[i]) {
      return findInOrderedSet(arr.slice(i + 1), target)
  } 
  else if (target < arr[i]) {
      return findInOrderedSet(arr.slice(0,i), target)
  } else { 
      return false;
  }
 
}
var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 18)); 
console.log(findInOrderedSet(nums, 6));  


module.exports = findInOrderedSet;
