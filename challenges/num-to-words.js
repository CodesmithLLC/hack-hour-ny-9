// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const wordNum = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fitty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  }
  const result = [];
  // ------ accounting for numbers less than or equal to 20 
  if (num <= 20) return wordNum[num];
  else {
    // --------- accounting for 3 digits
    if (num < 1000 && num > 99) {
      result.unshift('Hundy');
      let dig = num.toString().slice(0, 1);
      result.unshift(wordNum[dig]);

    }
    // ------- accounting for double digits
    let singleDig = num.toString().slice(-1);
    let doubleDig = num.toString().slice(-2);
  
    result.push(wordNum[doubleDig - singleDig])
    result.push(wordNum[singleDig]);
  }
  console.log(result);
  return result.join('');
}

module.exports = numToWords;

console.log(numToWords(955))
