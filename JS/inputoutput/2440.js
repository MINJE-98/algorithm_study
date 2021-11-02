const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";

for(let i = input -1; i >= 0; i--){
    for(let j = 0; j < input; j++){
        if( i >= j ) keep +="*"
    }
    console.log(keep);
    keep = ""
}