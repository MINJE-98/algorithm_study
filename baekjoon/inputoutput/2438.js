const input = parseInt(require("fs").readFileSync(0).toString())

for ( let i = 0; i < input; i++) {
    console.log(Array(i + 2).join("*"))
}
