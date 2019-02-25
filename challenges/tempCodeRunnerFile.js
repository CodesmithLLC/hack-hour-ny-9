function countTwos(num) {
  let count = 0;
  for (let i = 0; i <= num; i += 1) {
    const twos = i.toString().split('2').length - 1;
    console.log(twos);
    count += twos;
  }
  return count;
}

console.log(countTwos(3));