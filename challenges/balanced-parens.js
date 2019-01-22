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

function balancedParens(input){
  let stack = [];
  let parnls = { '[' : ']',
                 '(' : ')',
                 '{' : '}'
               }
  for (let i = 0; i < input.length; i++) {
    //push opening parens to stack
    if (input[i] in parnls) 
        stack.push(input[i]);
    //for the topmost stack element reject first non-matching parens
    if (input[i] in parenls && parenls[input[i]] !== stack[stack.length - 1]) 
        return false;
    //pop first matching parens
    if (input[i] in parenls && parenls[input[i]] === stack[stack.length - 1])  
        stack.pop();
  }
  
  if (stack.length === 0) return true;
      
}

module.exports = balancedParens;
