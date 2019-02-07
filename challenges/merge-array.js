/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  const array1 = arr1.slice();
  const array2 = arr2.slice();
  const sortedArr = [];
  
  while (array1.length > 0 || array2.length > 0) {
    if (!array2.length || array1[0] < array2[0]) {
      sortedArr.push(array1[0]);
      array1.shift();
    } else {
      sortedArr.push(array2[0]);
      array2.shift();
    }
  }

  return sortedArr;
}

module.exports = mergeArrays;
