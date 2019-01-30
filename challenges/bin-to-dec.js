/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

binToDec('11') // -> 5
function binToDec(binary) {
  let sum = 0;
  let num = 1;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (Number(binary[i]) === 1) {
      sum += num;
    }
    num *= 2
  }
}

module.exports = binToDec;
