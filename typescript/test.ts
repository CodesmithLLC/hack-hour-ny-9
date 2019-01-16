/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base: number, power: number): number {
  if (power === 1) return base;
  return base * pow(base, power - 1);
}

console.log(pow(5, 5));
