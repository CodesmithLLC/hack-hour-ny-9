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

  if (s1.length !== s2.length){
    return false;
  }

  if (s1 === s2){
    return true;
  }

  let counter = 0;
  let start = s1[0];
  let startOfS2 = s2.indexOf(start); console.log(startOfS2);
  let endOfS2 = s2.length; console.log(endOfS2);
  let difference = endOfS2 - startOfS2; console.log(difference);

  let slicedS2Start = s2.slice(startOfS2);
  let slicedS2End =s2.slice(0, difference + 1);
  console.log(slicedS2Start + slicedS2End);

  if ((slicedS2Start += slicedS2End) === s1){
    return true
  } else {
    return false
  }
}

console.log(stringRotation("hello", "hello"))// -> true
console.log(stringRotation("hello", "llohe"))// -> true
console.log(stringRotation("hello", "he"))// -> false
console.log(stringRotation("hello", "ollhe"))// -> false (not a rotation, just an anagram)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
