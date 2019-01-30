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
  if (str.length === 0) return true;
  let string = str.toLowerCase();
  let stack = [];
  let char = '';
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i=0; i < string.length; i++ ) {
    let s = string[i];
    // console.log(s, char, stack)
    // console.log(alpha.includes(s))
    if (alpha.includes(s) && string[i+1] !== undefined) {
        char += string[i];
    }
    if (alpha.includes(s) && string[i+1] === undefined) {
        char += string[i];
        if (stack.length > 0 && char.length > 0) {
            let target = stack[stack.length - 1].split('').reverse().join('');
            // console.log(s, target)
            if (target === char) {
                stack.pop();
                char = '';
            }
            else {
                stack.push(char);
                char = '';
            }

        }
        if (stack.length === 0 && char.length > 0) {
            stack.push(char);
            char = '';
        }
    }

    if (!alpha.includes(s) && alpha.includes(string[i-1]) && string[i-1] !== undefined) {
        // console.log(char, stack)
        if (stack.length > 0 && char.length > 0) {
            let target = stack[stack.length - 1].split('').reverse().join('');
            // console.log(s, target)
            if (target === char) {
                stack.pop();
                char = '';
            }
            else {
                stack.push(char);
                char = '';
            }

        }
        if (stack.length === 0 && char.length > 0) {
            stack.push(char);
            char = '';
        }
    }
}

  if (stack.length === 0) return true
  else return false;

};
module.exports = matchWord;
