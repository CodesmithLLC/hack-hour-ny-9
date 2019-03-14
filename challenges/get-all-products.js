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
  if (array.length === 0) return [0];

  const results = [];
  let zeroIsFound = false;

  const totalMultipleNoZeros = array.reduce((total, num) => {
    if (num !== 0) total *= num;
    else if (!zeroIsFound) {
      zeroIsFound = true;
      results.push(0);
    } 
    return total
  }, 1);

  array.forEach(num => {
    if (num !== 0) results.push(totalMultipleNoZeros / num);
  })

  return results;
}

module.exports = getAllProducts;
