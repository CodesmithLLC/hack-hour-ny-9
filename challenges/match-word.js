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

// if string is empty return true
// want all the words separated by a space or puncution
//if string.match(/[a-z]/i) concat word
// else push word clear build up
// iterate to center check first reverse equal to last

function matchWord(str) {
  if (str === '') {
    return true;
  }
  str.toLowerCase();
  let word = '';
  let words = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      word += str[i];
    } else {
      if (word.length >= 1) {
        words.push(word);
        console.log(word);
      }
    }
  }
  let start = 0;
  while (words.length > 1) {
    let rev = words[start]
      .split('')
      .reverse()
      .join();
    if (rev === words[words.length - 1]) {
      words.pop();
      words.shift();
    }
  }
}
console.log(matchWord('--kola--alok'));
module.exports = matchWord;
