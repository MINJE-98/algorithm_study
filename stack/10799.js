// X
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('');
var stack = [];
var answer = 0;
for(var i in input){
    // (인경우 스택에 push
    if(input[i] === '('){
        stack.push(input[i]);
    }else{
        // 레이저인 경우
        if(input[i-1] === '('){
            // ()는 레이저기 때문에 이전 (을 빼고 스택길이 anwser에 넣기.
            stack.pop();
            console.log(stack);
            console.log(`+${stack.length}`);
            answer += stack.length;
            // 다음도 )일 경우 
            // 쇠막대기가 1개만 생성되는 경우
            // () <- (()()))
        }else{
            stack.pop();
            console.log(stack);
            console.log("+1");
            answer ++;
        }
    }
}
console.log(answer);