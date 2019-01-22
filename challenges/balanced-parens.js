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
    const symbols = '(){}[]';
    const filtered = input.split('').filter(e => symbols.indexOf(e) !== -1).join('');
    if (filtered.length % 2 === 1) return false;

    //case parens open close back to back
    if (filtered[0] === '(' && filtered[1] === ')') {
        if (filtered.length === 2) return true;
        let newFiltered = filtered.slice(2, 4);
        return balancedParens(newFiltered);
    } else if (filtered[0] === '[' && filtered[1] === ']') {
        if (filtered.length === 2) return true;
        let newFiltered = filtered.slice(2, 4);
        return balancedParens(newFiltered);
    } else if (filtered[0] === '{' && filtered[1] === '}') {
        if (filtered.length === 2) return true;
        let newFiltered = filtered.slice(2, 4);
        return balancedParens(newFiltered);   
    }
    
    //case parens are nested (not solved yet)   
}

module.exports = balancedParens;
