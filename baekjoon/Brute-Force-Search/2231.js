let n = require('fs').readFileSync(0).toString().trim();
let answer = 0;

for (let i = 1; i < n; i++) {
  let result = i
    .toString()
    .split('')
    .reduce((a, b) => +a + +b);
  if (n == result + i) {
    answer = i;
    break;
  }
}

console.log(answer);
