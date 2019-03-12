
var matrix = [[1, 3, 5], [10, 11, 16], [23, 30, 34]];

function searchMatrix(matrix, target) {
  // start at top right corner
  let row = 0,
    col = matrix[0].length - 1;
  while (row < matrix.length - 1 && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row += 1;
    } else {
      col -= 1;
    }
  }
  return false;
}

console.log(searchMatrix(matrix, 30));
