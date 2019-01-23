/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      3     ->    III
 *      4     ->    IV
 *      5     ->    V
 *      8     ->    X
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
  let num = n;
  let result = "";
  let results = {
    1:"I",
    4:"IV",
    5:"V",
    9:"IX",
    10:"X",
    40:"XL",
    50:"L",
    90:"XC",
    100:"C",
    400:"CD",
    500:"D",
    900:"CM",
    1000:"M"
  }
  let keys = Object.keys(results);
  while (num > 0) {
    for (let i = keys.length-1; i >= 0; i--) {
      if (num-keys[i] >= 0) {
        num-=keys[i];
        result+=results[keys[i]];
        // console.log("num is now " + num);
        // console.log("key added " + keys[i]);
        break;
      }
    }
  }
  return result;
}

// console.log(romanNumeral(884));

module.exports = romanNumeral;
