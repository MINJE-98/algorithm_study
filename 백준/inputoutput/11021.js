const fs = require('fs');

const T = fs.readFileSync(0, "utf-8").toString().split('\n');
const count = parseInt(T[0])

for(let i = 0; i < count; i++){
    let data = T[i +1].split(' ');
    console.log(`Case #${i + 1}: ${parseInt(data[0]) + parseInt(data[1])}`);
}