/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const x = array.sort((a, b) => b - a);
    return x[0] * x[1] * x[2];
}

module.exports = highestProduct;
