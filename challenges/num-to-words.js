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


function helper(arr) {
    let digit = "1"
    let array = []
    array.push(Number(arr[arr.length - 1]))
    for (let i = arr.length - 2; i > -1; i--) {
        digit += "0"
        console.log(digit)
        console.log(arr[i])
        array.push(arr[i] * digit)
    }

    return array.reverse();
}




function numToWords(num) {
    let numbers = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        teen: "teen",
        20: "Twenty",
        30: "Thirty",
        40: "Fourty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety"
    }
    let overTwo = {
        100: "Hundred",
        1000: "Thousand",
        1000000: "Million",
        1000000000: "Billion",
        1000000000000: "Trillion"
    }
    let output = ""


    let str = num.toString()
    let arr = str.split("")
    console.log(arr)


    for (let keys in numbers) {
        if (keys === num.toString()) {
            return numbers[keys]
        }
    }
    let input = helper(arr)
    console.log(input)

    while (input.length !== 0) {
        console.log(input.length)
        for (let number of input) {
            console.log(Object.keys(numbers))
            console.log(number)
            let string = number.toString()
            // console.log(string === Object.keys(numbers))
            console.log(string)
            console.log(input)
            for (let digits in overTwo) {
                if (string.length === digits.length) {
                    console.log(digits)
                    console.log(string)
                    output += (numbers[string[0]])


                    output += overTwo[digits]


                    console.log(input)
                    console.log(output)
                }
            }
            input = input.splice(1, 3)

        }

    }

}







module.exports = numToWords;

console.log(numToWords(2999))
// console.log(numToWords(29))
console.log(numToWords(4))