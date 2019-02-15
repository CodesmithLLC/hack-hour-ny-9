/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for ( let i = 0; i < arr.length; i++){
        for ( let j = i+1; j < arr.length; j++){
            if ( arr[i] + arr[j] === n) return true;
        }
    }
    return false;
}

//========================christine=========================================

// Hash
function twoSum(arr, n) {
    const nums = {};
    for (let i = 0; i < arr.length; i++) {
      if (nums[n - arr[i]]) return true;
      
      nums[arr[i]] = 1;
    } 
    return false;
  }
  // Sort, then an optimized for loop
  function twoSum(arr, n) {
    arr.sort(function (a, b) {return a - b});
    let current;
    for (let i = 0, j = arr.length - 1; i < arr.length && j >= 0; ) {
      current = arr[i] + arr[j];
      if (current === n) return true;
      
      if (current > n) j--
      else i++
    }
    return false;
  }
  

module.exports = twoSum;
