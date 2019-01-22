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
  let newInput = "";

  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "(" ||
      input[i] === ")" ||
      input[i] === "{" ||
      input[i] === "}" ||
      input[i] === "[" ||
      input[i] === "]"
    ) {
      newInput += input[i];
    }
  }

  for (let i = 0; i < newInput.length + 1; i++) {
    newInput = newInput.replace("[]", "");
    newInput = newInput.replace("()", "");
    newInput = newInput.replace("{}", "");
  }
  if (newInput === "") {
    return true;
  } else {
    return false;
  }
}

module.exports = balancedParens;

console.log(balancedParens("[](){}"));
