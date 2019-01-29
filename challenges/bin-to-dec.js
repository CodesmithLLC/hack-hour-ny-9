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

function binToDec(binary) {
<<<<<<< HEAD
    let sum = 0;
    let digit = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            sum += digit;
        } else if (binary[i] !== '0' && binary[i] !== '1') {
            return "Error: Not in binary format"
        }
        digit *= 2;
    }
    return sum;
}

=======

}
>>>>>>> a79c3e123114216308f3df832c9e2a5cd2fe802c

module.exports = binToDec;
