function sumMultiples3Or5Below1000() {
  let sum = 0;
  const arr = [];
  for (let i = 0; i <= 1000; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMultiples3Or5Below1000());