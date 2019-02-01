/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

//  One way
function highestProduct(array) {
    let output = 1
    let neg = [];
    let pos = [];
    let highest;
    if (array.length < 3) {
        return 0
    } else {
        for (let num in array) {
            if (array[num] < 0) {
                neg.push(array[num])
            } else {
                pos.push(array[num])
            }
        }
        console.log(pos, neg)
        for (let n in neg) {
            neg[n] = neg[n] * (-1)
        }
        console.log(neg.sort())

    }
}

console.log(highestProduct([-3, -9, -2, -4, -6, 3, 6, 8, 7]))