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
if (n > 1000 && n % 1000 === 0) return ( romanNumeral ( Math.floor(n / 1000) ) ).concat('M');
if (n > 1000 && n % 1000 !== 0) return ( romanNumeral ( n - ( n % 1000 ) ) ).concat(romanNumeral ( n % 1000 ) );
  else {
  let closest = Infinity;
  let value;
  //find the key in nums closest to (but not greater than) n
  for (let i = 0; i < Object.keys(nums).length; i++) {
    if (Object.keys(nums)[i+1] > n && Object.keys(nums)[i+1] !== undefined) {
      closest = nums[Object.keys(nums)[i]];
      value = Object.keys(nums)[i];
      break;
    }
  }
  
  return closest.concat( romanNumeral( n - value ) );
  
  }
}
  

module.exports = romanNumeral;
