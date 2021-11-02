const input = parseInt(require('fs').readFileSync(0).toString())

const DP = new Array(input + 1).fill(0);
/**
 * 초기값
 * DP[1] = 1
 * DP[2] = 3
 * 점화식
 * DP[i] = (DP[i - 1]) + 2(DP[i - 2]) % 10007
 */
DP[1] = 1
DP[2] = 3

for(let i  = 3; i <= input; i++){
    DP[i] = (DP[i - 1] + (DP[i - 2] * 2)) % 10007
}

console.log(DP[input]);