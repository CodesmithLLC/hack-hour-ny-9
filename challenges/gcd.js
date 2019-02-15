/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let cap;
  let result = 0;
  if (a < 0 || b < 0) return false;
  a > b ? (cap = a) : (cap = b);
  for (let i = 1; i <= cap; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i > result ? i : result;
    }
  }
  return result > 0 ? result : null;
}
module.exports = gcd;
