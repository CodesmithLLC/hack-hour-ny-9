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

reverseInPlace(['c', 'a', 't']); //= ['t', 'a', 'c'];
reverseInPlace(['b', 'r', 'a', 'n', 'd', 'o', 'n']); //= ['n', 'o', 'd', 'n', 'a', 'r', 'b'];
reverseInPlace(['n', 'i', 'c', 'k']); //= ['k', 'c', 'i', 'n']
function reverseInPlace(array) {
  for (var i = 0; i < array.length / 2; i++){
    let front = array[i];
    let back = array[array.length - 1 - i];
    array[i] = array[array.length - 1 - i];
    array[array.length-1-i] = front;
    console.log(array);

  }
  return array
}

module.exports = reverseInPlace;
