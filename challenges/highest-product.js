/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort()
  let end = array.length - 1

  let result = sortedArr[end] * sortedArr[end - 1] * sortedArr[end - 2]
  return result;
}


module.exports = highestProduct;