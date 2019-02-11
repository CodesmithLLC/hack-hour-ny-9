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

// [0,0] ==> [n,0], [0,1] ==> [n-1,0], [0,2] ==> [n-2,0]... //

function rotateGrid(grid, n) {
  let output = [];
  for (let i=0; i < n; i++) {
    output.push([])
  }
  for (let i=0; i < n; i++) {
    for (let j=n-1; j >= 0; j--) {
      output[i].push(grid[j][i])
    }
  }
  
  return output;
}

module.exports = rotateGrid;
