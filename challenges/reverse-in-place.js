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
  let lo = 0;
  let hi = array.length - 1;
  while (lo < hi) {
    let temp = array[lo];
    array[lo] = array[hi];
    array[hi] = temp;
    lo += 1;
    hi -= 1;
  }
}

module.exports = reverseInPlace;
