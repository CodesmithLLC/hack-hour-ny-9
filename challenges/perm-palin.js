/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    // check 1st leter,  search the string to see if its found again 
        // if not check the next letter 
        // if yes check for palindrone 
    if (str.length === 1) return true; 
    if (str.length === undefined) return false; 

     const array= str.split('');
     return array.reduce((accu, el) =>{
     if (el)


    }, false)
    
	
}

module.exports = permPalin;