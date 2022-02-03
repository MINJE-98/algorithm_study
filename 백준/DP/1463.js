const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);

const DP = new Array(num + 1).fill(0);

/**
 * ex) 1 2 3 4 5 6 7 8 
 *       0 1 1 2 3 2 3 3 
 * 점화식
 * 1 : DP[i - 1] + 1
 * 2 : DP[i / 2] + 1
 * 3 : DP[i / 3] + 1
 * 
 */

for (let i = 2; i <= num; i++) {
  // 무쩨건 1을 넣는다.
    DP[i] = DP[i - 1] + 1;
  console.log('this is DP[' + i + ']  ' + DP[i]);
    if (i % 2 === 0) {
      console.log(DP[i], DP[i/2]+1);
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      console.log(DP[i], DP[i/3]+1);
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
}
console.log(DP[num]);