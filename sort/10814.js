// 첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.

// (1 ≤ N ≤ 100,000) => O(NlonN)
//3 초	256 MB


const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.sort((a, b)=> {
    return parseInt(a) - parseInt(b)
})
console.log(input.join("\n"));