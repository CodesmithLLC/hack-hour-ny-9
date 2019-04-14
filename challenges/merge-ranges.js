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
  // sort the arrays based on the start time
  // if start-time of second is equal or less than the end of first
  // check endtime of second
  // if endtime of second is less than or equal to endtime of first, first-end is the endtime
  // if endtime of second is greater than first endtime, now endtime is the second-end
  // if starttime is greater than the end of first, create new array
  let sorted = array.sort((a, b) => a[0] - b[0])
  let current;
  let lastMerged
  let output = [sorted[0]]
  for (let i = 0; i < sorted.length; i++) {
    current = sorted[i]
    lastMerged = output[output.length - 1]
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      output.push(current)
    }
  }
  return output;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))

module.exports = mergeRanges;
