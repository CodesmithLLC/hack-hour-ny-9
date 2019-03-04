function mergeRanges(array) {
  const sorted = [];
  for (let i = 0; i < array.length; i += 1) {
    sorted.push(array[i][0]);
    sorted.push(array[i][1]);
  }
  sorted.sort((a, b) => a - b);
  const set = new Set(sorted);
  console.log(set);
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));