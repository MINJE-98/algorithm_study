const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n');
const data = input[1].split('')

let result = 0
data.forEach(element => {
    result +=  parseInt(element);
});
console.log(result);