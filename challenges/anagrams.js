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
  let result = [];
  if (string.length <= 1) return [string];
  for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    let ana = anagrams(string.slice(0, i) + string.slice(i + 1, string.length));
    ana.forEach(an => {
      result.push(curr + an);
    });
  }
  return result.filter((elem, index) => result.indexOf(elem) === index);
}

console.log(anagrams(""));
module.exports = anagrams;
