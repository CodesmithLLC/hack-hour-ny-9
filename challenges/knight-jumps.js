// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let a = Number(str[1])
  let b = Number(str[3])
  let possible = []
  let real = []
  possible.push([a + 2, b + 1], [a - 2, b + 1], [a + 2, b - 1], [a - 2, b - 1])
  possible.push([a + 1, b + 2], [a - 1, b + 2], [a + 1, b - 2], [a - 1, b - 2])

  for (let i = 0; i < possible.length; i++) {
    if (1 <= possible[i][0] <= 8 || 1 <= possible[i][1] <= 8) {
      real.push(possible[i])
    }
  }
  return real.length
}

module.exports = knightjumps;
