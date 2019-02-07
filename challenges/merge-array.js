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
// result array
// empty checks
// find smaller compare length
// while loop condition i+1 !== length
//smallest is not undefined
// compare the i and j values
// Which ever is small push to result array.
// increament which index was smaller.
//else add j to result array.

function mergeArrays(arr1, arr2) {
  let result = [];
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let smallestArr = arr1.length > arr2.length ? arr2 : arr1;
  let largestArr = arr1.length <= arr2.length ? arr2 : arr1;
  let i = 0;
  let j = 0;

  while (j < largestArr.length) {
    if (smallestArr[i] < largestArr[j]) {
      result.push(smallestArr[i]);
      i++;
    } else {
      result.push(largestArr[j]);
      j++;
    }
  }
  return result;
}

module.exports = mergeArrays;
