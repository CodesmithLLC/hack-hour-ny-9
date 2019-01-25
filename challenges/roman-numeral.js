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
             1000 : 'M',
             10000 : 'M'.repeat(10),
             100000 : 'M'.repeat(100),
             1000000 : 'M'.repeat(1000),
             10000000 : 'M'.repeat(10000),
             100000000 : 'M'.repeat(100000),
             1000000000 : 'M'.repeat(1000000),
             10000000000 : 'M'.repeat(10000000) }

//loop over given object keys to find least number closest to n
let output = '';
if (n === 0) return output;
//return immediately if value is in nums
if (n in nums) return nums[n];

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
