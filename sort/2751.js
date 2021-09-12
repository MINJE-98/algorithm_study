// // N(1 ≤ N ≤ 1,000,000)


// const input = require('fs').readFileSync(0).toString().split('\n')
// const parseIntInput = parseInt(input[0])
// let sorted = [];
// for(let i = 0; i < parseIntInput; i++){
//    sorted.push(input[i +1])
// }
// console.log(parseInt(sorted.sort().join("\n")))

const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [firstLine, ...sortData] = line
  .trim()
  .split("\n")
  .map(v => Number(v));

const input = sortData.sort();

console.log(input.join("\n"));
