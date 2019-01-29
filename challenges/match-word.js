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
  let char = '';
  let stacktop = stack[stack.length - 1] || '' ;
  let target = stacktop.split('').reverse().join('')
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  //first add all words to stack
  for (let i=0; i < string.length; i++ ) {
    //concatenate to word if letter found
    if (alpha.index0f(string[i]) >= 0)
      char += string[i];
      if (alpha.index0f(string[i+1]) < 0)
        //check if char is reverse of topmost stack element
        if (char === target && stack.length > 0) stack.pop();
        stack.push(char);
        //reset string
        char = '';
  }
  if (stack.length === 0) return true
  else return false;
}

module.exports = matchWord;
