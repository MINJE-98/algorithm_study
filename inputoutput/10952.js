const fs = require('fs');

const input = fs.readFileSync(0, "utf-8").toString().split('\n');

for(let i = 0; i < input.length -1; i++){
    let data = input[i].split(' ');
    if(parseInt(data[0]) + parseInt(data[1]) == 0){
        return 0;
    }
     console.log(parseInt(data[0]) + parseInt(data[1]))
    
}