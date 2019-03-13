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

// function getAllProducts(array) {
//   if (array.length === 0) return [0];
//   if (array.filter(el => el === 0).length === 1) return [array.reduce((acc, curr) => curr === 0 ? acc : acc*curr, 1), 0];
//   if (array.filter(el => el === 0).length > 1) return [0];
//   let products = [];
//   for (let i=0; i < array.length; i++) {
//     let prodArray = array.slice(0,i).concat(array.slice(i+1));
//     products.push(prodArray.reduce((acc, curr) => acc*curr, 1));
//   }
//   const set = new Set(products);
//   return Array.from(set);
// }

function getAllProducts(array) {
  if (array.length === 0) return [0];
  if (array.filter(el => el === 0).length === 1) return [array.reduce((acc, curr) => curr === 0 ? acc : acc*curr, 1), 0];
  if (array.filter(el => el === 0).length > 1) return [0];
  let products = [];
  const product = array.reduce((acc, curr) => acc*curr, 1);
  for (let i=0; i < array.length; i++) {
    products.push(product/array[i]);
  }
  return products;
}
  
module.exports = getAllProducts;
