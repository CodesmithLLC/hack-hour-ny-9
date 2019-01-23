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
  const symbolsArr = [[1, 'I'],[4, 'IV'],[5, 'V'],[9, 'IX'],[10, 'X'],[40, 'XL'],[50, 'L'],[90, 'XC'],[100, 'C'],[400, 'CD'],[500, 'D'],[900, 'CM'],[1000,'M']];
  
  let remainder = 0;
  let roman = '';
  let symbol;

  for (let i = symbolsArr.length - 1; i >= 0; i--) {
    symbol = symbolsArr[i];
    if (n / symbol[0] >= 1) {
      remainder = n % symbol[0];
      n -= remainder;
      roman += symbol[1].repeat(n / symbol[0]);
      n = remainder;
    }
  }
  return roman;
}


module.exports = romanNumeral;
