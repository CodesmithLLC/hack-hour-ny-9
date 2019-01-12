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


  let len = array.length;
  let mode = 0;
  let mean = (array.reduce((acc, curr) => acc+=curr, 0)) / len;
  console.log(mean);

  let freqobj = array.reduce((acc, curr) =>  {
    acc[curr] ? acc[curr] += 1 :acc[curr] = 1;
    return acc;
  }, {})
  console.log(freqobj)

  for (let key in freqobj) {
    if (freqobj[key] > mode) mode = key;  
  }

  console.log(mode, mean)

  return mode == mean;

} 


module.exports = modemean;
