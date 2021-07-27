const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";
// 별 공백
// i, n - i
// n - i, i
for(let i = 1; i <= input; i++){
    for(let j = 0; j < input - i; j++){
        keep += " "
    }
    for(let j  = 0; j < i; j++){
        keep += "*"
    }
    console.log(keep);
    keep = ""
}
for(let i = 1; i <= input -1; i++){
    for(let j = 0; j < i; j++){
        keep += " "
    }
    for(let j  = 0; j < input - i; j++){
        keep += "*"
    }
    console.log(keep);
    keep = ""
}