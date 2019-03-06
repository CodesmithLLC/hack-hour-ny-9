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
  if (string.length === 0) return [''];
  
  let permArray = string.split('').map((letter, i) => {
    const lettersToUse = string.split('');
    lettersToUse.splice(i, 1);
    return {
      currPerm: letter,
      lettersToUse,
    };
  });

  for (let i = 1; i < string.length; i++) {
    permArray = nextPermutation(permArray);
  }

  return Array.from(new Set(permArray.map(el => el.currPerm)));
  
  function nextPermutation(array) {
    const finalArray = [];
    for (let currPermObj of array) {
      const { lettersToUse, currPerm } = currPermObj;
      for (let i = 0; i < lettersToUse.length; i++) {
        const newPerm = currPerm + lettersToUse[i];
        const newLettersToUse = lettersToUse.slice();
        newLettersToUse.splice(i, 1);
        finalArray.push({ 
          lettersToUse: newLettersToUse,
          currPerm: newPerm,
        });
      }
    }
    return finalArray;
  }
}

module.exports = anagrams;
