let fs = require('fs');
// var [n, input] = fs.readFileSync('/dev/stdin').toString().split('\n');
// input = input.split(" ").map(v=> +v);
let n = 17
let input = [3, 5, 2, 7]
let answer = input.slice()

for(let i = 0; i < n; i++) {
  console.log("i",i)
  for(let j = i+1; j <= n; j++) {
    console.log("j",j)
    console.log(answer)
    console.log(answer[i], answer[j])
    if(input[i] < answer[j]) {
      answer[i] = answer[j];
      break;
    } 
    else {
      answer[i] = -1;
    }
  }
}

console.log(answer.join(" "));

// var fs = require('fs');
// // var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// // var cases = input[0];
// // var splited = input[1].split(' ');
// var cases = '4'
// var splited = [3, 5, 2, 7]
// var stack = [];
// for(var i=0; i< Number(cases); i++){
//     while(stack.length!==0 && Number(splited[i]) > Number(splited[stack[stack.length-1]])){
//       console.log(stack)
//       console.log(splited)
//       splited[stack.pop()] = splited[i];
//     }
//     stack.push(i);
// }

// while(stack.length !== 0){
//     splited[stack.pop()] = -1;
// }
// console.log(splited.join(' ').trim());