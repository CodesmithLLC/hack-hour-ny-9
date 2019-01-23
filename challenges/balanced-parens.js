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
    if (input.length === 0) return false;

    input = input.replace(/[aA-zZ#:+&$~%=\s]/g, '')
    //console.log(input)

    let right = 0;
    let left = 0;

    for (let i = 0; i < input.length/2; i++) {
        if(input[i] === '['|| input[i] === '(' || input[i] === '{') {
        //console.log (input[i]); 
        right++
        }
    }

    for (let j = input.length-1; j >= input.length/2; j--) {
        if(input[j] === ']'|| input[j] === ')' || input[j] === '}') {
        //console.log (input[j]); 
        left++
        }
    }

    return left === right && left !== 0 && right !== 0 ? true : false;

}

module.exports = balancedParens;
