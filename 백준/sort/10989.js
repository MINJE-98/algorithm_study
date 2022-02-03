// N(1 ≤ N ≤ 10,000,000)
// 3 초 (하단 참고)	8 MB (하단 참고)
// nodejs로는 정답 불가 
const [n, input] = require("fs").readFileSync(0).toString().trim().split("\n")
// let input = ["10", "5", "2", "3", "1", "4", "2", "3", "5", "1", "7",]
// const n = input.shift()
input = input.map(element => Number(element)).sort((a, b)=> a - b )
console.log(input.join("\n"));