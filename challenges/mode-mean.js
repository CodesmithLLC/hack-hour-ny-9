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
let theMean = array[0]
    for(let i = 1; i < array.length; i++){
        theMean += array[i]
    }
    theMean = theMean/array.length
    console.log(theMean)
    
let counting = {}
    for(let i = 0; i<array.length; i++){
        if(!counting[array[i]]){
            counting[array[i]] = 1
            console.log(counting)
        } else {
            counting[array[i]] ++
            console.log(counting)
        }
        
    }
  
let arr = Object.keys(counting)
let theMode = arr[0]


    for(let j = 0; j < arr.length; j++){
        if(theMode < counting[arr[j]]){
            theMode = counting[arr[j]]
        } 
    }

    if((theMean) === theMode){
        return true
    } else {
        return false
    }
}

module.exports = modemean;

console.log(modemean([9]))