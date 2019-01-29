// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// if string is empty return true
// want all the words separated by a space or puncution
// if string.match(/[a-z]/i) concat word
// else push word clear build up
// iterate to center check first reverse equal to last

function matchWord(str) {
  if (str === '') {
    return true;
  }
  str.toLowerCase();
  let word = '';
  let words = [];
  words = getLetters();
  end = words.length - 1;
  for (let i = 0; i < words.length / 2; i++) {
    if (words[i] !== words[end]) {
      return false;
    }
    end -= 1;
  }
  return true;

  function getLetters() {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        word += str[i];
      }
      if ((!str[i].match(/[a-z]/i) && word.length >= 1) || i === str.length - 1) {
        for (let i = 0; i < word.length; i++) {
          words.push(word[i]);
        }
        word = '';
      }
    }
    return words;
  }
}
module.exports = matchWord;
