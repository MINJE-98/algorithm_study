// N (1 ≤ N ≤ 100,000)
// 1 초	256 MB
// 수의 범위가 -2**62 ~ 2**62이다.
// 자바스크립트의 Number는 2**52 -1까지의 정수만 나타낼 수 있다.(초과 이유)
// 내장 한수인 BigInt를 사용해야 한다.(길이의 제약없이 표현 가능)
let [n, ...input] = require("fs").readFileSync(0).toString().trim().split("\n")
let maxCount = 0;
let curCount = 0;
let prevNumber = 0;
let largest = 2**62;
// 정렬 후 BigInt로 현변환
input = input.sort((a,b) => a - b).map(v => BigInt(v))
input.forEach(v => {
    if(v != prevNumber) {
        prevNumber = v;
        curCount = 0;
    }
    curCount ++;
    if ((curCount > maxCount) || (curCount === maxCount && largest > v)) {
        maxCount = curCount;
        largest = v;
    }
});
console.log(String(largest));