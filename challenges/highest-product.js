/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const arrayOfMax = [];
  while(arrayOfMax.length < 3 && array.length != 0) {
    const currMax = Math.max(...array);
    arrayOfMax.push(currMax);
    array.splice(array.indexOf(currMax), 1);
  }

  return arrayOfMax.reduce((a, b) => a * b);
}

module.exports = highestProduct;
