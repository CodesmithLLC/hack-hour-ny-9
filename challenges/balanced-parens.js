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
function bracketChecker (string)

function balancedParens(input) {
  countOpen = 0;
  countClose = 0;
  countOpenB = 0;
  countCloseB = 0;
  countOpenC = 0;
  countCloseC = 0;

  input.split("").forEach(element => {
    if (element === "(") {
      countOpen += 1;
    }
    if (element === ")") {
      if (countOpen === 0) return false;
      countClose += 1;
    }
    if (element === "[") {
      countOpenB += 1;
    }
    if (element === "]") {
      if (countOpenB === 0) return false;
      countCloseB += 1;
    }
    if (element === "{") {
      countOpenC += 1;
    }
    if (element === "}") {
      if (countOpenC === 0) return false;
      countCloseC += 1;
    }
  });
  return countOpen === countClose &&
    countOpenB === countCloseB &&
    countOpenC === countCloseC
    ? true
    : false;
}
console.log(balancedParens('[(]{)}'));
module.exports = balancedParens;
