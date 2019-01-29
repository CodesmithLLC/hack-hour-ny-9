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
    let words = str.slice().toLowerCase().replace(/[^a-z]/ig, ' ').split(' ');
    let stack = [];
    let result = [];
    let outerIndex = result.length / 2;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            stack.push(words[i]);
        }
    }
    
    for (let i = 0; i < stack.length; i++) {
        if (stack[i].split('').reverse().join('') === stack[i + 1]) {
            i += 1
        } else {
            result.push(stack[i]);
        }
    }
    if (result.length % 2 === 1) return false;
    
    for (let i = (result.length / 2) - 1; i >= 0; i--) {
        if (result[i].split('').reverse().join('') !== result[outerIndex]) {
            return false;
        } 
        outerIndex += 1;
    }
    return true;
}

module.exports = matchWord;