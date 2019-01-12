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
  let sum = 0;
  let count = {};

  array.forEach((num)=> {
    sum += num;
    if(!count[num]) count[num] = 1;
    else count[num] += 1;
  })

  let average = Math.floor(sum/array.length)
  let modes = [];
  let final = 0;

  for(let key in count) {
    if (count[key]>1) {
      console.log(count[key])
      modes.push([key,count[key]]);
    }
  }

  let sorted = modes.sort();

  for (let i = 0; i <sorted.length-1; i++) {
    if(sorted[i+1][1] > sorted[i][1]) {
      final = sorted[i][0];
      console.log(final)
    }
    else if (sorted[i+1][1] < sorted[i][1]) {
      final = sorted[i][0]
    }
    else if (sorted[i][1] == sorted[i+1][1]) {
      if(sorted[i][0] > sorted[i+1][0]) {
        final = sorted[i][0];
      }
      else {
        final = sorted[i+1][0]
      }
    }
  }
  return final === average;

}

module.exports = modemean;


//[2,4,5,7,5]
