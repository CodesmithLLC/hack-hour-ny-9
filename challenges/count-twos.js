// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let digits = num.toString().length;
  let numString = num.toString();
  let result = 0;
  for (let i = 0; i < digits; i++) {
    let numString2 = numString;
    numString2[i] = '1';
    let product = 1;
    for (let j = 0; j < digits; j++) {
      // console.log('product ' + product + ' * digit' + numString2[j]);
      if (i !== j) {
        if (numString[j]) product *= (Number(numString2[j]) + 1);
      }
    }
    console.log('product is now ' + product);
    result += product;
  }
  return result;
}

console.log(countTwos(99));

module.exports = countTwos;
