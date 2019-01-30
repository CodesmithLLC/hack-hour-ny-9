/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length === 0) return 0;

    array = array.sort((a, b) => a - b);
  
    let neg = [];
    let pos = [];
    let negProduct = 0;
    let posProduct = 0;
  
    for(let i = 0; i < array.length; i++) {
      if (array[i] < 0) neg.push(array[i])
      pos.push(array[i])
    }
  
    if (neg.length !== 0) {
      if (neg.length % 2 === 0 && neg.length > 3) {
        console.log(neg)
        negProduct = neg[neg.length-1] * neg[neg.length-2] * neg[neg.length-3]
      }
    }
    
    posProduct = pos[pos.length-1] * pos[pos.length-2] * pos[pos.length-3]
  
    return posProduct > negProduct ? posProduct : negProduct

}


module.exports = highestProduct;
