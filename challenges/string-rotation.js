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
  const strLength = s1.length;
  const firstLetter = s1[0];

  for (let i = 0; i < strLength; i++) {
    if (firstLetter !== s2[i]) continue;

    for (let j = 1; j < strLength; j++) {
      const s2Index = j + i < strLength ? j + i : i + j - (strLength - 1) - 1;

      if (s1[j] !== s2[s2Index]) break;

      if (s1[j] === s2[s2Index] && j === strLength - 1) return true;
    }
  }

  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
