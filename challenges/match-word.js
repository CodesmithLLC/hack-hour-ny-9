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
  const map = {
    end: 'dne',
    if: 'fi',
    for: 'rof',
    while: 'elihw',
    try: 'yrt'
  };
  str = str
    .replace(/[^\w\s]|_/g, function($1) {
      return ' ' + $1 + ' ';
    })
    .replace(/[ ]+/g, ' ')
    .split(' ');
  // str = str.toLowerCase();
  // console.log(str)
  const stack = [];
  const values = Object.values(map);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] in map) {
      if (str[i + 1] !== map[str[i]]) {
        stack.push(map[str[i]]);
      }
    } else if (values.includes(str[i])) {
      const pop = stack.pop();
      if (pop !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;
