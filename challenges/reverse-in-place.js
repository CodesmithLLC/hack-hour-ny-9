'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {

    // go thru the array backwards 
    // slice the last element or grab the last element 
    // and then just push it to the beginning 
    let length = array.length-1;
    console.log(length)

    for (length; length>= 0; length--){
        array.unshift(array[length]);
        array.pop()
    }


return array // because we cant make a new array and change it! 
}
console.log(reverseInPlace([1,2,3,4]))
module.exports = reverseInPlace;
