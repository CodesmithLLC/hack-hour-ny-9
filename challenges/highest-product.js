/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const n = [];
    const p = [];
    //test edge cases
    if (array.length < 3) return "ERROR: need at least 3 numbers"
    else if (array.length === 3) return array[0] * array[1] * array[2];
    //separate the negative numbers from the positive numbers
    array.forEach(e => {
        if (e < 0) n.push(e); 
        else p.push(e);
    })
    //sort them out from largest to smallest numbers
    n.sort((a, b) => a - b);
    p.sort((a, b) => b - a);
    
    
    if ((p[0] * p[1] * p[2]) > (n[0] * n[1] * p[2])) {
        return p[0] * p[1] * p[2]
    } 
    else {
        return p[0] * n[0] * n[1] 
    }
}
console.log(highestProduct([5, 4, 3, 2]));

module.exports = highestProduct;
