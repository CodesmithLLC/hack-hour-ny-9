// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let result = 0;
  const numStr = num.toString();
  const length = numStr.length;

  for (let i = 0; i < length; i++) {
    if (num < 10) {
      if (num >= 2) result += 1;
      break;
    }
    const curTenToPow = Math.pow(10, length - i - 1);
    const nextTenToPow = Math.pow(10, length - i - 2);
    const wholePart = Math.floor(num / curTenToPow);
    console.log('curTenToPow', curTenToPow);
    console.log('nextTenToPow', nextTenToPow);
    console.log('wholePart', wholePart);
    if (wholePart === 2) {
      result += num % curTenToPow;
      console.log('result', result);
    }
    result += wholePart * nextTenToPow;
    console.log('result', result);
    num = num % curTenToPow;
  }
  return result;
}

// console.log(countTwos(1));
// console.log(countTwos(3) );
console.log(countTwos(13));
// console.log(countTwos(226)) ;
console.log(countTwos(999)) ;
// console.log(countTwos(11420));



module.exports = countTwos;
