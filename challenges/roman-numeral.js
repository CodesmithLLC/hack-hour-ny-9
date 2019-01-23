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
  //initialize blank output string
  //get closest match
  //get number of digits
  let nums = { 1 : 'I',
               4 : 'IV',
               5 : 'V',
               9 : 'IX',
              10 : 'X',
              40 : 'XL',
              50 : 'L',
              90 : 'XC',
              100 : 'C',
              400 : 'CD',
              500 : 'D',
              900 : 'CM',
             1000 : 'M' }

//loop over given object keys to find least number closest to n
let output = '';
if (n === 0) return output;
//return immediately if value is in nums
if (n in nums) return nums[n];
if (n > 1000) return ( romanNumeral ( Math.floor(n / 1000) ) ).concat('M');
else {
  let closest = Infinity;
  //find the key in nums closest to (but not greater than) n
  for (let key of nums) {
    if ((n - key) > 0 && (n - key < closest)) {
      closest = key;
      break;
    }
  }
  
  return nums[closest].concat( romanNumeral( n - closest ) );
  
  }
}
  

module.exports = romanNumeral;
