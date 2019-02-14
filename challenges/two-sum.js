/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return 'error - must have at least two elmements';

  let cache = {};

  for (let i = 0; i <arr.length; i++){
    if(arr[i] in cache) return true;
    let diff = n - arr[i];
    cache[diff] = arr[i];
    console.log(cache)
  }
  return false;
}

module.exports = twoSum;
