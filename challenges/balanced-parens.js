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
 *o
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *  if inbetween parentheses, there contains a single standalone bracket, it's a false
 *  enqueue [, enqueue (, enqueue ]
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

//using a stack data structure for this problem
function balancedParens(input){
  let stck = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '[':
      case '(':
      case '{':
        stck.push(input[i]);
        break;
      case ']':
        if (stck.length === 0) return false;
        if (stck.pop() !== '[') return false
        break;
      case ')':
        if (stck.length === 0) return false;
        if (stck.pop() !== '(') return false
        break;
      case '}':
        if (stck.length === 0) return false;
        if (stck.pop() !== '{') return false
        break;
    }
  }
  return stck.length;
}

// console.log(balancedParens('function() { telescopes.awesome();'))

module.exports = balancedParens;
