/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

[[1]];

function pascalTriangle(numRows) {
  let start = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    let temp = [];
    for (let j = 0; j <= start[i - 1].length; j += 1) {
      if (j === 0 || j === start[i - 1].length) {
        temp[j] = 1;
      } else {
        temp[j] = start[i - 1][j] + start[i - 1][j - 1];
      }
    }
    start.push(temp);
  }
  return start;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
