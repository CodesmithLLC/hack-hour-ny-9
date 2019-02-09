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
  const result = str.split('');
  const obj = {};
  for (let i = 0; i < result.length; i += 1) {
    if (obj[result[i]]) {
      obj[result[i]] += 1;
    } else {
      obj[result[i]] = 1;
    }
  }
  const values = Object.values(obj);
  let odd = false;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] % 2 !== 0 && odd === true) {
      return false;
    }
    if (values[i] % 2 !== 0) {
      odd = true;
    }
  }
  return true;
}

module.exports = permPalin;