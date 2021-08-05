const input = require('fs').readFileSync(0).toString().split('\n')
const DP = new Array(input + 1).fill(0)
/**
 * 초기값
 * DP[1] = 1
 * DP[2] = 2
 * DP[3] = 4
 * 점화식
 * DP[i] = DP[i] - 1 + DP[i] - 2 + DP[i] - 3
 */
DP[1] = 1
DP[2] = 2
DP[3] = 4

for(let i = 4; i <= 11; i++){
    DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3]
}
for(let i = 0; i < +input[0]; i++){
    console.log(DP[input[i + 1]]);
}