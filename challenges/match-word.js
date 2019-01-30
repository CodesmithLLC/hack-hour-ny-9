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

const regex = /[^a-zA-Z]/g;

function matchWord(str) {
  if (str.length === 0) return true;
  const filteredStr = str.replace(regex, ' ').split(' ')
  console.log(filteredStr)
  let stack = [];

  filteredStr.forEach((ele) => {
    const lastInStack = stack[stack.length - 1];
    if (ele !== '') {
      if (stack.length === 0) {
        stack.push(ele);
      } else {
        console.log(lastInStack, ele);
      }

    }
  })
}

// matchWord('__END_DNE----'); // -> true
// matchWord('__ENDDNE__'); // -> false       (not separated by a space)
// matchWord('IF()()fi[]'); // -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi'); // -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); // -> true
// matchWord(''); // -> true


module.exports = matchWord;
