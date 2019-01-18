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
    const store = [];
    for (let i = 0; i < array.length; i += 1) {
        store.push(array[i]);
    }
    for (let i = store.length; i >=0; i -= 1) {
        let j = 0;
        array[j] = store[i];
        j += 1;
    }
    return array;
}

const a = [1, 2, 3];
console.log(reverseInPlace(test));

module.exports = reverseInPlace;
