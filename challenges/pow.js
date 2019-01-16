/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, accm) {
    if (power === 0) return 1;
    if (accm === undefined) accm = base;
    if (power === 1) return accm;

    return pow(base, power - 1, accm * base);
}

module.exports = pow;