/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 gcd(5,5) -> 5
 gcd(a,1) -> 1
 gcd(a,0) -> a
 * gcd(10, 8) -> gcd(8, 2) -> gcd(2, 6) -> gcd(2, 4) -> gcd(2,2) -> 2
 * gcd(10, 9) -> gcd(10, 1) -> gcd(9, 1) -> gcd(8, 1) -> gcd(7, 1) -> ... -> gcd(2, 1) -> gcd(1, 1) -> 1
 gcd(11, 7) -> gcd(7,4) -> gcd(4,3) -> (3, 1) -> 1 
 * gcd(10, 15) -> gcd(10, 5) -> gcd(5,5) -> 5
 gcd(27, 33) -> gcd(27, 6) -> gcd(6, 21) -> gcd(6, 15) -> gcd(6, 9) -> gcd(6,3) -> gcd(3,3) -> 3
 */

// use Euclidean algorithm
function gcd(a, b) {
  if (a === b) return a;
  // gcd should divide sum of (a, b) as well as their difference
  if (a > b) return gcd(b, a-b);
  if (a < b) return gcd(a, b-a); 
}

module.exports = gcd;
