/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return undefined;
    let sorted = array.sort((a,b) => b-a);
    //console.log(sorted);
    return sorted[0] * sorted[1] * sorted[2];    
}


module.exports = highestProduct;
