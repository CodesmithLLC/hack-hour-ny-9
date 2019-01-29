/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let remainder = n;
    const romanNumerals = [];

    if (n < 0) return 'Please input a number greater than 0';

    while (remainder) {
        if (remainder >= 1000) {
            romanNumerals.push('M');
            remainder -= 1000;
        } else if (remainder >= 500) {
            romanNumerals.push('D');
            remainder -= 500;
        } else if (remainder >= 100) {
            romanNumerals.push('C');
            remainder -= 100;
        } else if (remainder >= 50) {
            romanNumerals.push('L');
            remainder -= 50;
        } else if (remainder >= 10) {
            romanNumerals.push('X');
            remainder -= 10;
        } else if (remainder >= 5) {
            romanNumerals.push('V');
            remainder -= 5;
        } else {
            romanNumerals.push('I');
            remainder -= 1;
        }
    }
    
    let result = romanNumerals.join('');
    result = result.replace('DCCCC', 'CM');
    result = result.replace('CCCC', 'CD');
    result = result.replace('LXXXX', 'XC');
    result = result.replace('XXXX', 'XL');
    result = result.replace('VIIII', 'IX');
    result = result.replace('IIII', 'IV');
    
    return result;
}

module.exports = romanNumeral;
