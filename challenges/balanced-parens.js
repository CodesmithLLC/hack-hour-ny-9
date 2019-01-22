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
  const open = '({[<';
  const close = ')}]>';
  const resultObj = {
    open: 0,
    close: 0
  };

  for (let i = 0; i < input.length; i++) {
    const curChar = input[i];
    if (open.indexOf(curChar) > -1) {
      console.log('in open', curChar, open.indexOf(curChar))
      resultObj.open += 1;
    } else if (close.indexOf(curChar) > -1) {
      console.log('in close', curChar, close.indexOf(curChar))
      resultObj.close += 1;
    }
  }
  return resultObj.open === resultObj.close ? true : false;
}

module.exports = balancedParens;
