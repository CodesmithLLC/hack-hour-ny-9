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

// function romanNumeral(n) {
//   const map = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M'
//   };

//   let resultObj = {};
//   let str = '';
//   let keys = Object.keys(map);
//   function getDivide(n) {
//     for (let i = 0; i < keys.length; i += 1) {
//       resultObj[keys[i]] = n / Number(keys[i]);
//     }
//   }
//   let start = 0;
//   while (n !== 0) {
//     if (resultObj[keys[start + 1]] < 1) {
//       n -= result * keys[i];
//       str += map[keys[i]].repeat(result);
//       start = 0;
//       getDivide(n);
//     }
//     start += 1;
//   }
// }

const romanNumeral = n => {
  const map = [
    1000,
    'M',
    900,
    'CM',
    500,
    'D',
    400,
    'CD',
    100,
    'C',
    90,
    'XC',
    50,
    'L',
    40,
    'XL',
    10,
    'X',
    9,
    'IX',
    5,
    'V',
    4,
    'IV',
    1,
    'I'
  ];
  let value = '';
  for (let i = 0; n > 0 && i < map.length; i += 2) {
    while (n >= map[i]) {
      value += map[i + 1];
      n -= map[i];
    }
  }
  return value;
};

module.exports = romanNumeral;
