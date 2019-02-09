/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let set = [];
  let sum = 0;
  // let index = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      console.log('-----------', array[j]);
    }
  }
}


function makeSum (array) {
  return 1 + 2 + 3
}

console.log(makeSum(1, 2, 3));



module.exports = highestProduct;
