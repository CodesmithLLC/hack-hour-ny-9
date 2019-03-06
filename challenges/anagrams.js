/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
    let output = [];
    function recurse(str, partialResult) {
        if (str.length === 0) {
            output.push(partialResult);
            return;
        }
        for (let i=0; i < str.length; i++) {
            recurse(str.slice(0,i) + str.slice(i+1), partialResult.concat(str[i]));
        }
        return output;
    }
    return recurse(string, '');
}

module.exports = anagrams;
