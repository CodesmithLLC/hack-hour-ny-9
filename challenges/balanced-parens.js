/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const signs = '(){}[]';
  const resultObj = {}

  for (let i = 0; i < input.length; i++) {
    const curChar = input[i];
    // create initial values for curChar if curChar is a bracket
    if (resultObj[curChar] === undefined && signs.indexOf(curChar) > -1) {
      resultObj[curChar] = 0;
    } else if (signs.indexOf(curChar) > -1) {
      resultObj[curChar] += 1;
    }
  }

  // open bracket equals to the close bracket
  for (let j = 0; j < signs.length; j += 2) {
    if (resultObj[signs[j]] !== resultObj[signs[j + 1]]) {
      return false;
    }
  }

  return true;
}

module.exports = balancedParens;
