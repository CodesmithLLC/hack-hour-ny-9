/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const remainder = a % b;
  if (remainder === 0) {
    return b;
  } else {
    return gcd(b, remainder);
  }
}
module.exports = gcd;
