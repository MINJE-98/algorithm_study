// let input = require('fs').readFileSync(0).toString().trim().split('\n');
let input = [
  '11',
  '1 4',
  '3 5',
  '0 6',
  '5 7',
  '3 8',
  '5 9',
  '6 10',
  '8 11',
  '8 12',
  '2 13',
  '12 14',
];
let n = input.shift();
input = input.map((v) => v.split(' ').map((v) => +v));
const time = new Array(24).fill(0);
let answer = 0;
for (let i of input) {
  const isEmpty = time.slice(i[0], i[1] + 1).reduce((a, b) => a + b);
  if (!isEmpty) {
    for (let j = i[0]; j <= i[1]; j++) {
      time[j] = 1;
    }
    answer += 1;
  }
}
console.log(answer);
