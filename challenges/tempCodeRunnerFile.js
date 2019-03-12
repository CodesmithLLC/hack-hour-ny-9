/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const map = {};
  for (let num of array) {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;