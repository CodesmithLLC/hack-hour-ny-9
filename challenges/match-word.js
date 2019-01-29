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
  let container = [];
  let strArray = str.match(/[a-zA-Z]+/g) || [];

  for (let i = 0; i < strArray.length; i++) {
    let currentStr = strArray[i].toLowerCase().split('').reverse().join('');
    if (currentStr === container[container.length - 1]) {
      container.pop()
    } else {
      container.push(strArray[i].toLowerCase());
    }
  }
  return container.length ? false : true;
}

module.exports = matchWord;