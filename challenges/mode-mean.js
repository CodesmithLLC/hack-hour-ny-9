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
    let obj = {};
    let max = 0;
    let count = 0;
    let mean = 0
    let sum = 0;
    for ( let i = 0; i < array.length; i++){
         sum  += array[i];
         mean = sum / array.length;
         if ( obj[array[i]]){
             obj[array[i]] += 1;
         } else {
             obj[array[i]] = 1;
         }
         if (count < array[i]){
         max = array[i]
         count = obj[array[i]];
         }
    }
    if ( mean === max){return true}
    return false;
}
    
    


       
 console.log ( modemean([1,2,2,3]))

module.exports = modemean;
