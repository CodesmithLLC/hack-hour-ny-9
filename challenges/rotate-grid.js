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
  let result = [];
  for (let k = 0; k < n; k++) {
    result.push(new Array())
  }
  //
  /* DO IT IN PLACE */
  // let queue = [];
  // for (let row = 0; row < n; row++) {
  //   for (let col = 0; col < n; col++) {
  //     queue.push(grid[n - col - 1][row]);
  //     grid[row][col] = grid[n - col - 1][row];
  //   }
  // }
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      queue.push(grid[n - col - 1][row]);
      result[row][col] = grid[n - col - 1][row];
    }
  }
  return result;
}

// console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
module.exports = rotateGrid;
