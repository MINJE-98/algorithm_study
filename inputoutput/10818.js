const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n')
const data = input[1].split(' ').map(Number).sort()

console.log(data);
console.log(data[0], data[data.length -1] );