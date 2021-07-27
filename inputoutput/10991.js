const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";
// 공백 별
// n, (2 * i) -1

for(let i = 1; i < input + 1; i++){
    for(let j = 0; j <input - i; j++){
        keep +=" "
    }
    for(let j = 1; j < 2 * i; j++){
        if(j % 2 == 0) keep += " "
        else keep += "*"
    }
    console.log(keep);
    keep = ""
}