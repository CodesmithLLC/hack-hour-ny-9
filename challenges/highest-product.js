/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// iterate through the array


// function highestProduct(array) {
//     let highest = 0;
//     for ( let i = 0; i < array.length -2; i++){
//         for ( let j = 1; j < array.length - 1; j++){
//             for ( let k = 2; k < array.length; k++){
//                 let product = array[i] * array[j] * array[k];
//                 if ( product > highest){
//                     highest = product;
//                 }
//             }
//         }
//     }
//     return highest;
// }
function highestProduct(array) {
    if (array.length < 3) return 0;
    if (!Array.isArray(array)) return 0;
    let highest = 0;
    let len = array.length;
    let sortedArr = array.sort((a,b) => a-b);
    if(Math.abs(sortedArr[0]) > sortedArr[len-2] && Math.abs(sortedArr[1]) > sortedArr[len - 3]) {
       highest = sortedArr[0] * sortedArr[1] * sortedArr[len -1]
    } else {
      highest = sortedArr[len-1] * sortedArr[len-2] * sortedArr[len-3]
    }
    return highest;  
  }



module.exports = highestProduct;
