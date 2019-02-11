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
  const rotatedGrid = [];
  for (let i = 0; i < n; i++) rotatedGrid.push([]);

  for (let rotatedRow = 0; rotatedRow < n; rotatedRow++) {
    for (let gridRow = 0; gridRow < n; gridRow++) {
      rotatedGrid[rotatedRow].unshift(grid[gridRow][rotatedRow]);
    }
  }
  return rotatedGrid;
}

module.exports = rotateGrid;
