
function gcd(a, b) {
  let gcd = -Infinity;
  const map = new Map();
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      map.set(i, true);
    }
  }
  console.log(map);
  for (let i = 1; i <= b; i += 1) {
    if (b % i === 0 && map.has(i) && i > gcd) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(gcd(24, 6));
