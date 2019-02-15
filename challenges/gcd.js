/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let gcd = -Infinity;
  const map = new Map();
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      map.set(i, true);
    }
  }

  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0 && map.has(i) && i > gcd) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(gcd(24, 6));

module.exports = gcd;
