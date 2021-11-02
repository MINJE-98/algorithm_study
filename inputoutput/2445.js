const input = parseInt(require("fs").readFileSync(0).toString())

let keep = "";
// i, 2 * (n - 1)
// n - i, 2i
for(let i = 1; i <= input; i++){
    for(let j = 0; j < i; j++){
        keep +="*"
    } // 왼쪽
    for(let j = 0; j < 2 * (input - i); j++){
        keep +=" "
    }
    for(let j = 0; j < i; j++){
        keep +="*"
    } // 오른쪾
    console.log(keep);
    keep = ""
}
for(let i = 1; i < input; i++){
    for(let j = 0; j < input -i; j++){
        keep +="*"
    } // 왼쪽
    for(let j = 0; j < 2 * i; j++){
        keep +=" "
    }
    for(let j = 0; j < input - i; j++){
        keep +="*"
    } // 오른쪾
    console.log(keep);
    keep = ""
}

