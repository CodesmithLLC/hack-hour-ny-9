// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3,
// "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble 
// by both 3 and 5
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
    if (typeof num !== 'number') return console.error('The argument should be a number.');

    const array = Array.apply(null, { length: num });

    return array.map((elem, index) => {
        const currValue = index + 1;
        if (currValue % 3 === 0 && currValue % 5 === 0) return 'fizzbuzz';
        if (currValue % 3 === 0) return 'fizz';
        if (currValue % 5 === 0) return 'buzz';
        return currValue;
    });
}

module.exports = fizzbuzz;
