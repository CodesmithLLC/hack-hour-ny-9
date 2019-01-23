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
    const romanChars = { 'I': 0, 'V': 0, 'X': 0, 'L': 0, 'C': 0, 'D': 0, 'M': 0 };
    let num = n;

    if (num >= 1000) {
        const count = Math.floor(num / 1000);
        num -= count * 1000;
        romanChars['M'] = count;
    }
    if (num >= 500) {
        const count = Math.floor(num / 500);
        num -= count * 500;
        romanChars['D'] = count;
    }
    if (num >= 100) {
        const count = Math.floor(num / 100);
        num -= count * 100;
        romanChars['C'] = count;
    }
    if (num >= 50) {
        const count = Math.floor(num / 50);
        num -= count * 50;
        romanChars['L'] = count;
    }
    if (num >= 10) {
        const count = Math.floor(num / 10);
        num -= count * 10;
        romanChars['X'] = count;
    }
    if (num >= 5) {
        const count = Math.floor(num / 5);
        num -= count * 5;
        romanChars['V'] = count;
    }
    if (num >= 1) {
        const count = num;
        num -= count;
        romanChars['I'] = count;
    }
    
    let romanStr = 'M'.repeat(romanChars['M']);

    romanStr += 'D'.repeat(romanChars['D']);

    if (romanChars['C'] === 4 && romanChars['D'] === 0) romanStr += 'CD';
    else if (romanChars['C'] === 4 && romanChars['D'] === 1) {
        romanStr = romanStr.slice(0, -1);
        romanStr += 'CM';
    }
    else romanStr += 'C'.repeat(romanChars['C']);

    romanStr += 'L'.repeat(romanChars['L']);

    if (romanChars['X'] === 4 && romanChars['L'] === 0) romanStr += 'XL';
    else if (romanChars['X'] === 4 && romanChars['L'] === 1) {
        romanStr = romanStr.slice(0, -1);
        romanStr += 'XC';
    }
    else romanStr += 'X'.repeat(romanChars['X']);

    romanStr += 'V'.repeat(romanChars['V']);

    if (romanChars['I'] === 4 && romanChars['V'] === 0) romanStr += 'IV';
    else if (romanChars['I'] === 4 && romanChars['V'] === 1) {
        romanStr = romanStr.slice(0, -1);
        romanStr += 'IX';
    }
    else romanStr += 'I'.repeat(romanChars['I']);

    return romanStr;
}

module.exports = romanNumeral;
