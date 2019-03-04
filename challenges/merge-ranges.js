/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  const sorted = [];
  for (let i = 0; i < array.length; i += 1) {
    sorted.push(array[i][0]);
    sorted.push(array[i][1]);
  }
  sorted.sort((a, b) => a - b);
  const set = new Set(sorted);
  console.log(set);
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));
module.exports = mergeRanges;
