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
  const conversions = {
    1: "I",
    4: "IV",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  const romanReferenceArr = Object.keys(conversions);
  const foundIndex = romanReferenceArr.indexOf(n);
  if (foundIndex > 0) {
    return conversions[romanReferenceArr[foundIndex]];
  }
  const newReference = romanReferenceArr.filter(key => key < n).reverse();
  return newReference.reduce((results, keyEl) => {
    if (n > keyEl) {
      results += conversions[keyEl];
      n = n - keyEl;
      results += conversions[n];
    }
    return results;
  }, "");
}
console.log(romanNumeral(544));
module.exports = romanNumeral;
