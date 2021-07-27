const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";

for( let i = 0; i < input; i++ ){ // 0 1 2 별
    for(let j = 0; j < input; j++){
        if( i > j) keep += " "
        else keep +="*"
    }
    console.log(keep);
    keep = ""
}
