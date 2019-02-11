/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let map = {};
  let countOdds = 0;
  for (let char of str) {
    if (map[char]) map[char] += 1;
    map[char] = 1;
  }
  const chars = Object.keys(map);
  for (let j = 0; j < chars.length; j += 1) {
    const char = chars[j];
    if (map[char] % 2 === 1) {
      countOdds += 1;
    }
    if (countOdd > 2) return false;
  }
  return true;
}

console.log(permPalin('cbaba'));

module.exports = permPalin;
