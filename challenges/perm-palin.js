/**
 * Given a string, determine if any of the (permutations: sequence of right numbers) of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let cache = {};
  let odd = [];
  for (let i in str) {
    if (!cache[str[i]]) {
      cache[str[i]] = 1;
    } else {
      cache[str[i]]++;
    }
  }

  for (let letter in cache) {
    if (cache[letter] % 2 !== 0) {
      odd.push(letter);
    }
  }

  if (odd.length > 1) {
    return false;
  }
  return true;
}

module.exports = permPalin;
