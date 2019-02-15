/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(b === 0) return undefined

  while(b != 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

module.exports = gcd;