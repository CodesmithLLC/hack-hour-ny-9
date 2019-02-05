const T = 'And he was right there';
const P = 'was';

const n = T.length;
const m = P.length;

let k = 0;
let i = 0;
let isMismatch;
let p;
let t_next;
let t_previous;
let t;

while (k < n - m + 1) {
  i = 0;
  isMismatch = false;

  while (i < m && isMismatch === false) {
    p = P[i];
    t_next = T[k+i];
    t_previous = T[k-i-2];
    t = T[k + i - 1];
    if (p !== t) {
      isMismatch = true;
    } 
    else {
      if (i === 0 && (t_previous || t_previous !== ' ')) {
        isMismatch = true;

      } else if (i === m - 1 && (!t_next || t_next !== ' ')) {
        isMismatch = true;

      }
      else i++;
    }
  }
  if (isMismatch === false) {
    console.log('There is a match at position', k)
  }

  k++;
}