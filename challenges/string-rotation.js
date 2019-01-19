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
  if (s2[0] !== s1[0]) {
    const s2Char = s2[0];
    const index = s1.indexOf(s2Char);
    s1 = s1.split('');
    let right = s1.splice(index);
    s1 = s1.join('');
    right = right.join('');

    const result = right + s1;

    return isSubstring(result, s2);
  }
  return isSubstring(s1, s2);
  }
  return isSubstring(s1, s2);
}

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
