let [n, range, gasPrice] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
// let [n, range, gasPrice] = ['4', '3 3 4', '1 1 1 1'];
// ['4', '2 3 1', '5 2 4 1'];
range = range.split(' ').map((v) => +v);
gasPrice = gasPrice.split(' ').map((v) => +v);
// 충전된 가스
let gas = 0;
// 싼 가스비 글로벌로 지정
let cursor = 0;
for (let i = 0; i < gasPrice.length - 1; i++) {
  if (i === 0) cursor = gasPrice[i];
  // 현재 가스비가 이전 가스비보다 싸다면 cursor 변경
  if (cursor > gasPrice[i]) cursor = gasPrice[i];
  // 가장 싼 가스비와 다음 도시까지 거리까지 가스비 책정
  gas += cursor * range[i];
}
console.log(gas);
