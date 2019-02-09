/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let output = []

    // basecase
    if (arr1[0] === undefined && arr2[0] === undefined) {
        console.log("check")
        return output
    } else if (arr1[0] !== undefined && arr2[0] === undefined) {
        console.log("check")
        for (let i = 0; i < arr1.length; i++) {
            output.push(arr1[i])
            return output
        }
    } else if (arr1[0] === undefined && arr2[0] !== undefined) {
        console.log("check")
        console.log(arr1)
        console.log(arr2)
        for (let i = 0; i < arr2.length; i++) {
            output.push(arr2[i])
            return output
        }
    }

    // console.log(arr1[0] === undefined && arr2[0] !== undefined)


    if (arr1[0] < arr2[0]) {
        output.push(arr1[0])
        arr1 = arr1.splice(1, arr1.length)

    } else if (arr1[0] > arr2[0]) {
        output.push(arr2[0])
        arr2 = arr2.splice(1, arr1.length)
    }

    return output.concat(mergeArrays(arr1, arr2))
}


module.exports = mergeArrays;

var my_array = [3, 4, 6, 10, 11, 15];
var another_array = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(my_array, another_array))