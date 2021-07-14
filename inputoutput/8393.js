const input = require('fs').readFileSync(0).toString()
const IntToinput = parseInt(input);

let result = 0;
for( let i = 1; i <= IntToinput; i++ ){
    result += i
}
console.log(result);