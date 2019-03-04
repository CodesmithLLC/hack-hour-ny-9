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
  const sortedArray = array.slice().sort((a, b) => a[0] - b[0]);
  const finalArr = [];
  
  for (let i = 0; i < sortedArray.length; i++) {
    const originalIndex = i;
    let currMax = -Infinity;

    while(sortedArray[i + 1] && (sortedArray[i][1] >= sortedArray[i + 1][0])) {
      currMax = Math.max(currMax, sortedArray[i][1], sortedArray[i + 1][1]);
      i++;
    }
    
    finalArr.push([sortedArray[originalIndex][0], currMax === -Infinity ? sortedArray[i][1] : currMax]);
  }

  return finalArr;
}

var times = [[0, 1], [8, 100], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times));

module.exports = mergeRanges;
