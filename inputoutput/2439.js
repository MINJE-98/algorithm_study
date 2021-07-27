const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";

for( let i = 0; i < input; i++ ){ // 0 1 2 공백
    for( let j = input - 1; j >= 0; j-- ){  // 2 1 0 별
        if(i < j) keep += " "
        else keep += "*"
    }
    console.log(keep);
    keep = ""
}