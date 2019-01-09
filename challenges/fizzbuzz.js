// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    //  input = a single number! 
    //  output = an array of numbers from 1 to the given input number while replacing fizz, buzz, or fizzbuzz on certain conditions 
    //  additional info:  
        //  we have to create and array with all numbers from 1 to the input number 
        //  what we know is that we have rules to replace any number divisible by 3 with fizz, divisible by 5 with buzz, and both by fizzbuzz 

                // first thought strategy: abandoned! 
                    //  an object that holds the rules     // an if statement that tests the element and using the result to look into the object and grab the replacement
                    // const obj = {
                    //     divBy3: fizz, 
                    //     divBy5: buzz, 
                    //     divBy3n5: fizzbuzz,
                    // }
                // side note: I would like to try to solve this using the functions for div by 3 5 and both and then test the element on all three functions 

            
        const array = [];
        // test for negative and return an empty array 
           if (num<1) return array 

        for (let element = 1; element<=num; element++){

            if (element%3===0 && element%5===0) array.push('fizzbuzz')
            else if (element%3===0) array.push('fizz')
            else if (element%5===0) array.push('buzz')
            else array.push(element)
        }

       return array 
}


console.log(fizzbuzz(-5))




module.exports = fizzbuzz;


