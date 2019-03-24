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