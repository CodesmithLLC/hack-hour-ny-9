/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

//  One way
function highestProduct1(array) {
    let biggest = array[0];
    let output = []
    let index;
    let newArr;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
            index = i
        }
    }
    output.push(biggest)
    newArr = array.splice(index, 1)
    biggest = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
            index = i
        }
    }
    output.push(biggest)
    newArr = array.splice(index, 1)
    biggest = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
            index = i
        }
    }
    output.push(biggest)
    return output;
}

module.exports = highestProduct;


function highestProduct(array) {
    array = array.sort()
    return (array.splice(array.length - 3, 3))
}