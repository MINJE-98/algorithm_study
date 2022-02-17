let [n, p] = require('fs').readFileSync(0).toString().trim().split('\n');
// let [n, p] = ['5', '3 1 4 3 2'];
p = p
  .split(' ')
  .sort((a, b) => a - b)
  .map((v) => +v);
let answer = 0;
for (let i = 0; i < p.length; i++) {
  answer += p.slice(0, i + 1).reduce((a, b) => a + b);
}
console.log(answer);
