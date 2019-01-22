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
  const parens = input.match(/[(){}[\]]/g);
  const opening = ['(','[','{'];
  const closing = [')',']','}'];
  let left = 0;
  const stack = [];

  let curr = parens[left];
  while (curr) {
    if (opening.indexOf(curr) !== -1) {
      stack.push(curr);
      left++;
      curr = parens[left];
    } else if (opening.indexOf(stack.pop()) === closing.indexOf(curr)) {
      left++;
      curr = parens[left];
    } else return false;
  }

  return stack.length === 0 ? true : false;
}

module.exports = balancedParens;