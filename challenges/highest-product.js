/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) return 0;
    //find all negatives first
    let negatives = [];
    array.forEach(el => {
        if (el < 0) {
            negatives.push(el);
        }
    })
    //console.log(negatives);
    //if at least two negatives exist push their absolute values to the sorted array
    if (negatives.length > 1) {
        array.push(Math.abs(negatives[negatives.length - 1]), 
                      Math.abs(negatives[negatives.length - 2]))
    }

    //console.log(array)

    let sorted = array.sort((a,b) => b-a);
    //console.log(sorted);

    return sorted[0] * sorted[1] * sorted[2];    
}


module.exports = highestProduct;
