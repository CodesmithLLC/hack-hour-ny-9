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
    let openBrackets = [];

    for (let char of input) {
        if (!['(', '{', '[', ']', ')', '}'].includes(char)) continue;

        if (char === '(' || char === '{' || char === '[') {
            openBrackets.push(char);
            continue;
        }

        // if we get here, its because char is a closing bracket
        if (openBrackets.length === 0) return false;

        const lastChar = openBrackets.pop();
        if (char === ')') {
            if (lastChar !== '(') return false;
            continue;
        } else if (char === '}') {
            if (lastChar !== '{') return false;
            continue;
        } else if (char === ']') {
            if (lastChar !== '(') return false;
            continue;
        }
    }

    return openBrackets.length === 0;
}

module.exports = balancedParens;
