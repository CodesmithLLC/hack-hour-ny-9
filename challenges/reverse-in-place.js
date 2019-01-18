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
console.log(array.length /2)
console.log(Math.floor(array.length/2))
let swap1;
let swap2;
    for(let i = 0; i < array.length/2; i++){
        swap1 = array[array.length - (i+1)]
        swap2 = array[i]
        array[i] = swap1
        array[array.length - (i+1)] = swap2
    }
return array;
}

module.exports = reverseInPlace;



