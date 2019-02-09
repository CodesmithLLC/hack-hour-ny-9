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
  const arrOfChar = str.split('');
  const charCount = arrOfChar.reduce((accm, curr) => {
    if (Object.keys(accm).includes(curr)) accm[curr]++;
    else accm[curr] = 1;
    return accm;
  }, {});

  const arrOfCount = [];
  for (let key of Object.keys(charCount)) {
    arrOfCount.push(charCount[key]);
  }

  const oddCharCount = arrOfCount.filter(el => el % 2 !== 0);

  return oddCharCount.length < 2;
}

module.exports = permPalin;