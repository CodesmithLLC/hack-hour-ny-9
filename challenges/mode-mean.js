/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *  
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 * mean is average and mode is common number 
 * input = an array 
 * output a boolean 
 * other info: 
 * 
 * by going thru the array 
 * have to calculate mean 
 *      have to math.floor the mean 
 * have to calculate mode 
 *  If there are multiple modes, use the max of the modes
 * 
 * test if mean and mode are equal 
 * 
 *
 */


function modemean(array) {
    let numObj ={};
    let sum=0;
    let mean; 
    let mode;
    let count=0;

    array.forEach( e=> {

        if (numObj[e] === undefined) {
            numObj[e] = 1;
         } else {
            numObj[e]++
         }
        sum+= e;
    })
    mean = Math.floor( sum/(array.length-1))
    for (let keys in numObj) {
        count =  numObj[keys];
        if (numObj[keys] > count) {
            count =  numObj[keys]; 
            mode = keys;
        } else  {
             // then only Reset the mode if the key is a higher value 
             if (mode<keys){
                 mode = keys;
             }

        }

    }

  
   console.log("the mean is:", mean, "and mode:", mode)
   return (mean === mode) ? true : false;

}
 console.log (modemean([1,2,3,4,4])) 
module.exports = modemean;
