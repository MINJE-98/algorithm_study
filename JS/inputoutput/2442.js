const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";

for( let i = 0; i < input; i++ ){ // 반복 횟수

    for(let j  = 0; j < input; j++){ // 공백
        if(i < j) keep += " "
    }
    for(let s = 1; s <= ((i+1) * 2) -1; s++){ // 별
        keep +="*"
    }
    console.log(keep);
    keep = ""
}
