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
  // let result = [];
  // for (let i = 1; i <= num; i++) {
  //   if (i % 15 === 0) {
  //     result.push("fizzbuzz");
  //   } else if (i % 5 === 0) {
  //     result.push("buzz");
  //   } else if (i % 3 === 0) {
  //     result.push("fizz");
  //   } else {
  //     result.push(i);
  //   }
  // }
  if (num === 0) {
    return [];
  } else if (num % 15 === 0) {
    return fizzbuzz(num-1).concat("fizzbuzz");
  } else if (num % 5 === 0) {
    return fizzbuzz(num-1).concat("buzz");
  } else if (num % 3 === 0) {
    return fizzbuzz(num-1).concat("fizz");
  } else {
    return fizzbuzz(num-1).concat(num);
  }
}

// console.log(fizzbuzz(16));

module.exports = fizzbuzz;
