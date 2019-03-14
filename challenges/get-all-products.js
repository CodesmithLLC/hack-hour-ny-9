/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!Array.isArray(array)) return [];

  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(
      array.reduce((total, num, j) => {
        if (i !== j) total *= num;
        return total
    }, 1))
  };

  return results
}

module.exports = getAllProducts;
