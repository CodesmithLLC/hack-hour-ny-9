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

mergeArrays([1,2,3], [4,5,6])


function mergeArrays(arr1, arr2) {
  const merged = [];
  let ind1 = 0, ind2 = 0;
  while (arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
    if (arr1[ind1] < arr2[ind2])
      merged.push(arr1[ind1++]);
    else if (arr1[ind1] >= arr2[ind2])
      merged.push(arr2[ind2++]);
    else
      merged.push(arr1[ind1++] || arr2[ind2++]);
  }
  return merged;
}


// function mergeArrays(arr1, arr2) {
//   var sorted = [];

//   let start;
//   let end;

//   let combined = arr1.concat(arr2);
//   combined.sort((a,b) => a-b);

//   return combined
  
// }

module.exports = mergeArrays;
