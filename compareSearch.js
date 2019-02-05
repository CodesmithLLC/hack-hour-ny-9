const NUM = 100000;
let seq = 0; 
let count = 0;
let bin = Math.pow(NUM, 2) / 2 - NUM / 2;

while(bin > seq) {
  count++;
  bin += Math.log2(NUM);
  seq += NUM;
}

console.log(count, seq, bin)