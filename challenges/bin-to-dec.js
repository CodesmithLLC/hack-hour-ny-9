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
 * // input : string
 * // output : hexadecimal version in number
 */

function binToDec(binary) {
  const map = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 32,
    7: 64
  };
  let total = 0;
  let index = 1;
  binary = binary.split('');

  for (let i = binary.length - 1; i !== -1; i -= 1) {
    debugger;
    if (binary[i] === '1') {
      total += map[index];
      index += 1;
    } else {
      index += 1;
    }
  }
  return total;
}

module.exports = binToDec;
