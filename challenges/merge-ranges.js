/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 * var times = [[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]]
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  // make copy of array
  const ranges = array.slice();
  const result = [];
  // sort array
  ranges.sort((a, b) => a[0] - b[0]);
  // push into result array the first element
  // also the smallest
  result.push(ranges[0]);

  for (let i = 1; i < ranges.length; i++) {
    let last = result[result.length - 1];
    let current = ranges[i];

    if (current[0] > last[1]) {
      result.push(current);
      // if num at the second index of an element is greater than the prev - do a swap
    } else if (current[1] > last[1]) {
      last[1] = current[1];
    }
  }
  return result;
}

module.exports = mergeRanges;
