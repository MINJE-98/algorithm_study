let input = require('fs').readFileSync(0).toString().trim();
// let input =
//'1-1+1-1+1-1+1-1+1-1+1';
//   '10+20+30+40';
//   '00009-00009';
let answer = 0;

// 시작이 음수인경우.
if (input[0] === '-') {
  input = input.replace(/\+/g, '-');
  answer =
    -1 *
    input
      .split('-')
      .map((v) => +v)
      .reduce((a, b) => a + b);
} else {
  // 시작이 양수인경우.
  input = input.split('-');
  // 첫 연산 모두 덧셈
  answer = input
    .shift()
    .split('+')
    .map((v) => +v)
    .reduce((a, b) => a + b);
  while (input.length != 0) {
    console.log(input);
    answer +=
      -1 *
      input
        .shift()
        .split('+')
        .map((v) => +v)
        .reduce((a, b) => a + b);
  }
}

console.log(answer);
