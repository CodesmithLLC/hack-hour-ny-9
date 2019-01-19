/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // convert passed first string to an array for further manipulations
  let rotated = s1.split('');

  // split the array on the middle and recombine, while switching places
  // convert back to a string;
  rotated = rotated.slice(Math.floor(rotated.length / 2))
            .concat(rotated.slice(0, Math.floor(rotated.length / 2)))
            .join('');

  // combine the original first string with its rotation        
  const doubleFirst = s1 + rotated;

  // check if both strings have the same length and the 
  // second string corresponds to either the original string or 
  // its rotated version
  return s1.length === s2.length && isSubstring(doubleFirst, s2);
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
