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
  const numStrings = {
    1: "One",
    2: "One",
    3: "One",
    4: "One",
    5: "One",
    6: "One",
    7: "One",
    8: "One",
    9: "One",
    10: "One",
    11: "One",
    12: "One",
    13: "One",
    14: "One",
    15: "One",
    16: "One",
    17: "One",
    18: "One",
    19: "One",
    20: "One",
    30: "One",
    40: "One",
    50: "One",
    60: "One",
    70: "One",
    80: "One",
    90: "One",
    100: "One",
    1000: "One",
    1000: "One",
    1000: "One",
    1000: "One",
    1000: "One",
  }
}

module.exports = numToWords;
