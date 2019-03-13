/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 * 1 + 1 + 3 + 3 + 2 = 10
 * 
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // let sum = array.reduce((curr, acc) => {
  //   return acc += curr;
  // }, 0);
  //o(n) just use an object to store the count times and at the end return the one with 1 count
  // let obj = {};
  // for (let i = 0; i < array.length; i++) {
  //   if (obj[array[i]]) obj[array[i]]++;
  //   else obj[array[i]] = 1;
  // }
  // for (key in obj) {
  //   // console.log(key, obj[key]);
  //   if (obj[key] === 1) return key;
  // }//
  // return;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
  //o(1) pointers?
  // for (let i = 0; i < array.length; i++) {
  //   let index = Math.abs(array[i]) - 1;
  //   if (array[index] === Math.max()) array[index] = 0;
  //   else array[index] = Math.max();
  // }
  // for (let j = 0; j < array.length; j++) {
  //   if (array[j] === Math.max()) return 
  // }
}

// console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
