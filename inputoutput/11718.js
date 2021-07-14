const fs = require('fs');

const T = fs.readFileSync(0, "utf-8").toString().split('\n');

for(let i = 0; i <T.length -1; i++){
    console.log(T[i]);
}