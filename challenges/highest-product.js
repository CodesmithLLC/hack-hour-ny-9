/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let maxProd = Number.NEGATIVE_INFINITY;
  
  function dfs(array, index, currProd, count) {

    if (count === 3) {
      if (currProd > maxProd) maxProd = currProd;
      return;
    }

    for (let i = index; i < array.length; i++) {
      dfs(array, i + 1, currProd * array[i], count + 1)
    }
  } 

  dfs(array, 0, 1, 0)
  return maxProd;
}

module.exports = highestProduct;
