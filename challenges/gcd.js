/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smaller;
  if (a < b) {
    smaller = a;
  } else {
    smaller = b;
  }
  for (smaller; smaller > 0; smaller--) {
    if (a % smaller === 0 && b % smaller === 0) {
      return smaller;
    }
  }
  return smaller;
}

module.exports = gcd;
