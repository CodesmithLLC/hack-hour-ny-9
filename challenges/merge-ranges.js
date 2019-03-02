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
  let range = getNums(array)
  let numbers;
  console.log(range)
  for (let i in range) {
    for (let j in range[i]) {
      console.log(range[i][j])
    }
  }
}

function getNums(array) {
  let all = {}
  let output = {}
  let k = 0

  for (let i = 0; i < array.length; i++) {
    console.log(array[i][0])
    for (let j = array[i][0]; j <= array[i][1]; j++) {
      output[k] = j
      k++
    }
    all[i] = output
    output = {}
    k = 0
  }
  console.log(all)
  return all
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(getNums(times))
console.log(mergeRanges(times))

module.exports = mergeRanges;
