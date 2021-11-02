const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";
// 공백 별
// i, 2 * (n - i) -1
// (n - 1) - i, (i * 2) + 1 
for(let i = 0; i < input; i++){
    for(let j = 0; j < i; j++){
        keep += " "
    }
    for(let j = 0; j < 2 * (input - i) -1; j++){
        keep +="*"
    }
    console.log(keep);
    keep = ""
}
for(let i = 1; i < input; i++){
    for(let j = 0; j < (input - 1) - i; j++){
        keep += " "
    }
    for(let j = 0; j <(i * 2) + 1; j++){
        keep +="*"
    }
    console.log(keep);
    keep = ""
}