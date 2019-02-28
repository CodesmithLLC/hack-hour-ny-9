function repeatNumbers(array) {
  const nSum = ((array.length - 1) * (1 + (array.length - 1))) / 2;
  const arraySum = array.reduce((acc, curr) => acc + curr);
  console.log(nSum, arraySum);
}

console.log(repeatNumbers([1, 3, 2, 3]));