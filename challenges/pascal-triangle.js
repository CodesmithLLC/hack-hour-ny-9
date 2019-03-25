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

function pascalTriangle(numRows) {
    var output = [];
    for (let i = 0; i < numRows; i++) {
        output.push([])
    }

    for (let j = 0; j < output.length; j++) {
        for (let k = 0; k <= j; k++) {
            if (k === 0 || k === j) {
                output[j].push(1);
            }
            else {
                output[j].push(output[j-1][k-1] + output[j-1][k])
            }
        }
    }
    return output;

}

module.exports = pascalTriangle;
