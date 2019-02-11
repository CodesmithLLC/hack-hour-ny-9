/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let output = [];
  let input = [];

  for (let i = n; i > 0; i--) {
    for (let outer = n - 1; outer >= 0; outer--) {
      input.push(grid[outer][0]);
      grid[outer] = grid[outer].splice(1, grid[outer].length);
    }
    output.push(input);
    input = [];
  }
  return output;
}

let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(grid, 3));

module.exports = rotateGrid;
