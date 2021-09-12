// quick selection으로 풀어야함.
let [q, input] = require("fs").readFileSync(0).toString().trim().split("\n");
const [ n, k ] = q.split(" ")
input = input.split(" ").sort((a,b) => a - b)
input = BigInt(input[+k - 1])
console.log(input);