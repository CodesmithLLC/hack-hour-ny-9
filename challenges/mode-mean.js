/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  array.sort();
  const n = array.length;
  const sum = array.reduce((acc, element) => {
    acc += element;
    return acc;
  });
  const mean = Math.floor(sum / n);
  const frequencies = array.reduce((acc, element) => {
    console.log(acc);
    const elementExists = acc.get(element) !== undefined;
    console.log(elementExists);
    elementExists ? acc.set(element, acc.get(element) + 1) : acc.set(element, 1);
    console.log(acc);
    return acc;
  }, new Map());

  let mode = undefined;
  if (array.length === 1) {
    mode = array[0];
  }
  else if (array.length > 1) {
    let actualMax = frequencies.entries().reduce((acc, element) => {
      console.log(acc);
      return acc;
    });
    frequencies.forEach([element, count] => {

    });
  }
  
}


console.log(modemean([1, 2, 3]));
module.exports = modemean;
