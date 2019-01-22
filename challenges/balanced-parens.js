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
//define string of parens
//iterate through input
    //check if parens contains character in input
    //if open parens add to stack if closed parens pop from stack
//return if stack.length === true
function balancedParens(input){
    const parens = '[]{}()';
    const open = '[{(';
    const close = ']})';
    const stack = [];

    if (input.length < 2) return false;

    for(let i = 0; i < input.length; i++){
      if(parens.includes(input[i])){
        if(open.includes(input[i])){
            stack.push(input[i]);
        }
        if(close.includes(input[i])) {
            if(stack[stack.length-1] === '[' && input[i] === ']' ||
                stack[stack.length-1] === '{' && input[i] === '}' ||
                stack[stack.length-1] === '(' && input[i] === ')'){
                stack.pop()
            }         
        }
      }
    }
    return stack.length === 0;
}
module.exports = balancedParens;
