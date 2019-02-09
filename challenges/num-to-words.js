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

  let result = '';
  const numbers = [
    1,	'One',
    2,	'Two',
    3,	'Three',
    4,	'Four',
    5,	'Five',
    6,	'Six',
    7,	'Seven',
    8,	'Eight',
    9,	'Nine',
    10,	'Ten',
    11,	'Eleven',
    12,	'Twelve',
    13,	'Thirteen',
    14,	'Fourteen',
    15,	'Fifteen',
    16,	'Sixteen',
    17,	'Seventeen',
    18,	'Sighteen',
    19,	'Nineteen',
    20,	'Twenty',  
    30,	'Thirty',
    40,	'Forty',
    50,	'Fifty',
    60,	'Sixty',
    70,	'Seventy',
    80,	'Eighty',
    90,	'Ninety',
    100,	'Hundred',
    1000,	'Thousand',
    1000000, 'Million',
    1000000000, 'Billion',
    1000000000000, 'Trillion',
    1000000000000000, 'Quadrillion',
  ]

  const quantifiers = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };

  const toQuantify = [100, 1000, 1000000, 1000000000, 1000000000000, 1000000000000000]

  let wholePart = 0;
  let remainder = 0;
  for (let i = numbers.length - 1; i >= 0; i -= 2) {
    remainder = num % numbers[i - 1];
    num -= remainder;
    wholePart = num / numbers[i - 1];
    num = remainder;
    if (wholePart > 0) {
      if (toQuantify.includes(numbers[i - 1])) result += quantifiers[wholePart];
      result += numbers[i];
    } 
  }
  return result ? result : 'zero';
}

module.exports = numToWords;
