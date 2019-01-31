/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// iterate through the array


function highestProduct(array) {
    let highest = 0;
    for ( let i = 0; i < array.length -2; i++){
        for ( let j = 1; j < array.length - 1; j++){
            for ( let k = 2; k < array.length; k++){
                let product = array[i] * array[j] * array[k];
                if ( product > highest){
                    highest = product;
                }
            }
        }
    }
    return highest;
}



module.exports = highestProduct;
