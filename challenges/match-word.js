// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.length == 0) return true;
  //normalize each character in input string
  let string = str.toLowerCase();
  let stack = [];
  let char = [];
  let matched = false;
  let stacktop = stack[stack.length - 1];
  let target = stacktop.split('').reverse().join('')
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  //first add all words to stack
  for (let i = 0; i < string.length - 1; i++ ) {
    //concatenate to word if letter found
    if (alpha.index0f(string[i]) >= 0)
      char.push(string[i]);
    //add accumulated word to stack
    if (alpha.index0f(string[i]) < 0 && char.length > 0)
      stack.push(char);
      //check if current accumulated word is reverse of topmost stack element
      if (char.join('') === target) stack.pop();
      if (char.join('') !== target) return false;
      char = [];
    //check if new word is reverse of topmost stack element ocne non-alpha character is encountered
//     if (alpha.index0f(string[i+1]) < 0 && char === target && stack.length > 0)
//       stack.pop();
    //should break once new word is not reverse of top stack element
//     if (alpha.index0f(string[i+1]) < 0 && char !== target && stack.length > 0)
//       return false;
  }
        
  if (stack.length === 0) return true
  else return false;
}

module.exports = matchWord;
