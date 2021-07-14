const fs = require('fs');

const input = fs.readFileSync(0).toString()
const data = parseInt(input);

let str = ""
for(let i = 0; i < data; i++){
    str += `${i + 1}\n`
}
console.log(str);

