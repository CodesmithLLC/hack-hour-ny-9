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
    let sum = [];
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            sum.push('fizzbuzz');
            continue;
        }
        if (i % 3 === 0) {
            sum.push('fizz');
            continue;
        }
        if (i % 5 === 0) {
            sum.push('buzz');
            continue;
        }
        else {
            sum.push(i);
            continue;
        }
    }
    return sum;
}

module.exports = fizzbuzz;
