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
  if (s1.length !== s2.length) return false;
  else if (s1 === s2) return true;

  let rotated = rotate(s2);
  while (s2 !== rotated) {
    if (isSubstring(s1, rotated)) return true;
    rotated = rotate(rotated);
  }
  return false;

  function rotate(str) {
    let result = str.split('');
    let firstEl = result[0];
    for (let i = 0; i < result.length - 1; i++) {
        result[i] = result[i + 1]
    } 
    result[result.length - 1] = firstEl;
    return result.join('');
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
