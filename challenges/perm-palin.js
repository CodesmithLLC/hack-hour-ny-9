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
  // debugger;
  if (str.length < 2) return true;
  if (str.length < 3) {
    if (
      str
        .split('')
        .reverse()
        .join('') === str
    )
      return true;
  }
  let pal = false;

  function dfs(initialStr, tempStr, index) {
    if (tempStr.length >= 3) {
      if (
        tempStr
          .split('')
          .reverse()
          .join('') === tempStr
      ) {
        pal = true;
        return;
      }
    }

    return dfs(initialStr, tempStr.concat(initialStr[index]), index + 1);
  }
  dfs(str, '', 0);
  return pal;
}

console.log(permPalin('cbaba'));

module.exports = permPalin;
