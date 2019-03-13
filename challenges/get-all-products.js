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
  if (array.length === 0) return [];
  let isZero = false;

  const nonZeroProduct = array.reduce((accm, curr) => {
    if (curr !== 0) return accm * curr;
    else {
      isZero = true;
      return accm;
    }
  }, 1);

  if (isZero) {
    return [nonZeroProduct, 0];
  }

  const productsSet = new Set();
  for (let num of array) {
    if (num === 0) productsSet.add(0);
    else productsSet.add(nonZeroProduct / num);
  }

  return Array.from(productsSet);
}

module.exports = getAllProducts;
