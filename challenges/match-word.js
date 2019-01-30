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

function isLetter(value) {
    value = value.toUpperCase();
    for (let i = 0; i < value.length; i++)
        if (!(value[i] >= "A" && value[i] <= "Z")) return false;

    return true;
}


function matchWord(str) {
    let check = []
    let index1;
    let index2;

    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            index1 = i
            break;
        }
    }

    str = str.slice(index1, str.length)

    for (let j = str.length - 1; j > 0; j--) {
        if (isLetter(str[j])) {
            index2 = j + 1
            break;
        }
    }
    str = str.slice(0, index2)
    console.log(str)
}

module.exports = matchWord;

console.log(matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw"))
console.log(isLetter("k"))