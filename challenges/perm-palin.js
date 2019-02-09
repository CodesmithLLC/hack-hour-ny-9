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
  const count = 
    str
      .split('')
      .reduce((acc, letter) => {
        acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
        return acc;
      }, {});
  
  return Object
    .values(count)
    .filter(n => n % 2)
    .length <= 1;
}

console.log(permPalin('ababtt'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;