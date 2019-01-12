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
 // mean
 let total = 0;
 let mean = 0;
 let modes = {};
 mean = getMean();

 //sort
 array.sort((a, b) => a - b);

 for (let i = 0; i < array.length; i++) {
     if(modes.hasOwnProperty(array[i])) {
        modes[array[i]]++;
     } else {
         modes[array[i]] = 1;
     }    
 }

 for(let key in modes) {
    if (modes[key] > 1) {
      mode = 0 < modes[key] ? key : mode;
      if(mode > 0){
          mode = key;
      } else {
          if(mode < modes[key]){
              mode = key;
          }
      }
    }
}

if(mode) {
    // keys are strings
    return Number(mode)=== mean;
}
    function getMean() {
        for (let i = 0; i < array.length; i += 1) {
            total += array[i];
        }
        return Math.floor(total / array.length);
    }
}

module.exports = modemean;
