const input = require("fs").readFileSync("/dev/stdin", "utf8");
let [firstLine, ...sortData] = input
  .trim() 
  .split("\n")

let position = sortData.map( n => n.split(" ").map(m => Number(m)))

let result = ''
position
.sort(
    ( x, y ) => {
    if(x[1] !== y[1]) {
        return x[1] - y[1];
    }
        return x[0] - y[0];
})
.forEach( (n, index) => {
    if(index === firstLine -1) result +=`${n[0]} ${n[1]}`
    else result +=`${n[0]} ${n[1]}\n`
})

console.log(result);
