/**
 * 2022-02-14
 * 손익분기점
 * 임대료 + 재산세 + 보험료 = A
 * 재료비 + 인건비 = B
 * 노트북가격 = C
 * 1, 3번째 테스트케이스에선 A/(C - B)를 한 결과에 +1을 하게되면 출력을 구할 수 있다.
 * 2번째 테스트케이스에선 B >= C가 아닐경우 -1을 리턴하도록 출력을 구할 수 있다.
 */
let [a, b, c] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);
if (b >= c) console.log(-1);
else console.log(Math.floor(a / (c - b) + 1)); // tip! 결과값을 반올림을 해야한다.
