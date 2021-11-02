const input = parseInt(require('fs').readFileSync(0).toString());

const DP = new Array(input + 1).fill(0);
/**
 * 초기값 설정
 * DP[1] = 1
 * DP[2] = 2
 * 점화식 
 * DP[i] = DP[i - 2] + DP[i -1]
 */
DP[1] = 1
DP[2] = 2
for(let i  = 3; i <= input; i++){
    DP[i] = (DP[i - 2] + DP[i - 1]) % 10007
}

console.log(DP[input]);