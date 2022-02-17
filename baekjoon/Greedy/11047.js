let [nk, ...input] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
// let [nk, ...input] = [
//   '10 4200',
//   '1',
//   '5',
//   '10',
//   '50',
//   '100',
//   '500',
//   '1000',
//   '5000',
//   '10000',
//   '50000',
// ];
nk = nk.split(' ');
let n = nk[0];
let k = nk[1];
let count = 0;
input = input.map((v) => +v).reverse();

for (let coin of input) {
  const result = parseInt(k / coin);
  if (result != 0) {
    console.log(result);
    count += result;
    k = k % coin;
  }
}

console.log(count);
