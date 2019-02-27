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
  let numStr = num.toString();
  const length = numStr.length;

  numStr = '0'.concat(numStr)
  let prevNum = 0;

  for (let i = 1; i <= length; i++) {
    prevNum += Number(numStr[i - 1]);
    const curNum = Number(numStr[i]);
    // console.log('prevNum', prevNum);
    // console.log('curNum', curNum);
    
    const tenToCurPow = Math.pow(10, length - i);
    let multiplier = prevNum;
    if (curNum > 2) multiplier += 1;
    result += tenToCurPow * multiplier;
    // console.log('tenToCurPow', tenToCurPow);
    // console.log('multiplier', multiplier);
    // console.log('result', result);

    if (curNum === 2) result += Number(numStr.slice(i + 1)) + 1;

    prevNum *= 10;

  }  
  return result;
}

// console.log(countTwos(1));
// console.log(countTwos(3) );
// console.log(countTwos(13));
// console.log(countTwos(226)) ;
// console.log(countTwos(1000)) ;
// console.log(countTwos(11420));



module.exports = countTwos;
