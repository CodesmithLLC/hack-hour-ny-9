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

function isPallindrome(str) {
    if (str.length === 1) return false;
    return str == str.split('').reverse().join('');
  }
  
function permPalin(str) {
    if (str.length === 1) return true;
  
    for (let i = 0; i < str.length; i++){
      let test = str.slice(i,i+3);
      if (isPallindrome(test)) return true;
    }
  return false;
}

module.exports = permPalin;