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
  let dups = {};
  for (let i = 0; i < str.length; i++) {
    if (!dups[str[i]]) dups[str[i]] = 1;
    else delete dups[str[i]];
  }
  //leftover characters in dups are unique. If more than 1 left, then return false
  return Object.keys(dups).length <= 1;
}

// console.log(permPalin('aasjhdlfkjhads'));

module.exports = permPalin;