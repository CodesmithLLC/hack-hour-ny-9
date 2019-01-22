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
    if (input.length <= 1) return false;
    let stack =[];
    let matching;
    let ch;
    let openingParens = ['[', '{', '('];
    let closingParens = [']', '}', ')'];
    for ( let i = 0; i < input.length; i++){
        ch = input[i];
        if (closingParens.indexOf(ch) === -1) {
            matching = openingParens[closingParens.indexOf(ch)]
            if ( stack.length == 0 || ( stack.pop() != matching)) return false;
            stack.push(ch);
        }
    }
    return ( stack.length == 0);

}
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
 

module.exports = balancedParens;

