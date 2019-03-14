/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (array.length === 0) return [0];
  //DOESNT WORK WITH ZEROES
  // let product = array.reduce((curr, acc) => {
  //   return acc * curr;
  // }, 1)
  // let result = [];
  // array.forEach(num => {
  //   if ()
  //   result.push(product / num);
  // });
  let product;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) product *= array[j];
    }
    result.push(product);
  }
  return result;
  // return array.reduce((curr, acc) => {
  //   acc.push(product / curr);
  //   return acc;
  // }, [])
}
// console.log(getAllProducts([1, 7, 3, 4]))

module.exports = getAllProducts;
