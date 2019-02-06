const T = 'And he was right there';
const P = 'was';

const n = T.length;
const m = P.length;

let k = 0;
let i = 0;
let isMismatch;
let t;

while (k < n - m + 1) {
  i = 0;
  isMismatch = false;

  
  while(i < m && isMismatch === false) {
    p = P[i];
    p.next = P[i+1];
    p.previous = P[i-1];
    t = T[k + i - 1];
    if (p !== t) {
      isMismatch = true;
    } else i++;
  }
  if (isMismatch === false) {
    console.log('There is a match at position', k)
  }

  k++;
}