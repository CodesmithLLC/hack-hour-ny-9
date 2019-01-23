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
  if (input.includes('(') && input.includes(')') && input.includes('[') && input.includes(']') && input.includes('{') && input.includes('}')) {
    if (input.indexOf('(') < input.indexOf(')') && input.indexOf('[') < input.indexOf(']') && input.indexOf('{') < input.indexOf('}')) {
      return true; 
    }
  }
  if (input.includes('(') && input.includes(')') && input.includes('[') && input.includes(']') && input.includes('{') && input.includes('}')) {
    if (input.indexOf('(') < input.indexOf(')') && input.indexOf('[') < input.indexOf(']') && input.indexOf('{') < input.indexOf('}')) {
      return true; 
    }
  }
    
  
  
  return false;
}

module.exports = balancedParens;

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true