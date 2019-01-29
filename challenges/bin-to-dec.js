/* eslint-disable no-console */
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
// get length of string
// iterate
// add 2^ of length -1 if char == 1
// else continue

function binToDec(binary) {
  let sum = 0;
  let exp = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (Number(binary[i])) {
      sum += 2 ** exp;
    }
    exp++;
  }
  return sum;
}

module.exports = binToDec;
