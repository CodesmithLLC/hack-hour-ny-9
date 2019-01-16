/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1;

    if (power > 0) return base * pow(base, power -1);

    else return 1 /(base * pow(base, Math.abs(power) -1));

}

module.exports = pow;
