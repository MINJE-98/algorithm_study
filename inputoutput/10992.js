const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";
// 공백 별
// n -1, (2 * i) -1

for (let i = 0; i < input; i++) {
    //마지막
    if(input - 1 == i){
        for(let j = 0; j < (2 * input) -1; j++){
            keep +="*"
        }
        console.log(keep);
        keep = ""
    }else {
       
        for(let j = 0; j < input - 1 - i; j++){
            keep += " "
        }
        keep += "*"
        for(let j = 0; j < (2 * i) -1; j++){
            keep += " "
        }
        if(i != 0) keep += "*"
        console.log(keep);
        keep = ""
    }
}