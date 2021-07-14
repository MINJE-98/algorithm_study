const fs = require('fs');

const input = fs.readFileSync(0).toString()
const data = parseInt(input);

let str = ""
for(let i = 0; i < data; i++){
    str += `${data - i}\n`
}
console.log(str);

