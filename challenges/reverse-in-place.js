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
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left += 1;
    right -= 1;
  }
  return array;
}

module.exports = reverseInPlace;
