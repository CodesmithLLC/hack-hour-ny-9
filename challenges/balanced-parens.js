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


// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

function balancedParens(input) {
  let brackets=  '()[]{}';

  let distance;

  for (let i = 0; i <= brackets.length - 1; i = i + 2) {
    
    let open = brackets[i];
    let close = brackets[i + 1];
    
    open = input.indexOf(open);
    close = input.indexOf(close);
    console.log(open);
    console.log(close);
    console.log(close - open);
    
    let distance =close - open % 2 !== 0){
      return false;
    }
  }
  return true
}

module.exports = balancedParens;
