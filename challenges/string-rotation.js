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
//substring order must be maintained
//use pointers to find start of string one and start of string 2
//circular iteratation
function stringRotation(s1, s2) {
  let pointer1 = 0;
  let pointer2 = 0;
  //iterate through to find starting point for s2
  for (let i = 0; i < s2.length; i++) {
   if(s1[pointer1] === s2[i]) {
     pointer2 = i;
     break;
   } 
  }
  for (let i = 0; i < s1.length; i++) {
    console.log((pointer2 + i)% s2.length);
    if(s1[pointer1] !== s2[(pointer2 + i)% s2.length]) {  
      return false;
    }
    pointer1++;   
  }
  return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
