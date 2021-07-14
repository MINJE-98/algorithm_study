const fs = require('fs');

const input = fs.readFileSync(0).toString();
let str = ""

for(let i = 0; i <input.length; i++){
    str += input[i];
    if(str.length % 10 == 0 || input.length-1 == i){
        console.log(str);
        str = ""
    }
}