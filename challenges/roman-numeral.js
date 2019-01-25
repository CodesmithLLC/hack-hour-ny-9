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

console.log(romanNumeral(33));

function romanNumeral(n) {

  let number = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  let intervals = Object.keys(number);
  intervals = getPosition(n, intervals);
  intervals = intervals.map(e => Number(e));

  console.log(intervals);
  
  if (intervals.includes(n)) {
    return number[n];
  }

  newString = getTheRightNumerals(n, intervals);
  console.log(newString);
  
}


console.log(getTheRightNumerals(33, [1, 4, 5, 9, 10]));

function getTheRightNumerals(n, intervals){
  let sum = 0;
  let newString = '';

  for (var i = n; sum !== n; i--){
    
  }


}


console.log(getPosition(33, [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 100]));

function getPosition(n, intervals) {
  for (let i = 0; i <= n; i++) {
    if (intervals[i] === n) {
      return intervals.slice(0,[i + 1]);
    }
    if (intervals[i] > n) {
      return intervals.slice(0,[i]);
    }
  }
}
  


module.exports = romanNumeral;
