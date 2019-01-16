/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === 0) return 1;

  while (power > 0) {
    base *= base
    power--
  }

  return base;
}

module.exports = pow;
