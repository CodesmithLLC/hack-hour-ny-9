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
  let parenls = {'[' : ']',
                 '(' : ')',
                 '{' : '}'
               }
  let closing = ['}',')',']']
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let top = stack[stack.length - 1];
    //push opening parens to stack and move on to next char
    if (char in parenls) {
        stack.push(char);
        continue;
    }
    //for the topmost stack element reject first non-matching parens
    if (closing.indexOf(char) > 0 && stack.length === 0) {return false;}
    if (closing.indexOf(char) > 0 && char !== parenls[top]) {
        return false;
    }
    //pop first matching parens
    if (closing.indexOf(char) > 0 && char === parenls[top]) {
        stack.pop();
    }
  }
  
  if (stack.length === 0) return true;
      
}

module.exports = balancedParens;
