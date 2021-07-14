const fs = require('fs');

const input = fs.readFileSync(0).toString()
const parseIntInput = parseInt(input)
for(let i = 0; i < 9; i++){
    console.log(`${parseIntInput} * ${i + 1} = ${parseIntInput *( i + 1)}` );
}
