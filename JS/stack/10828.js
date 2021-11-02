const [N, ...input] = require("fs").readFileSync(0).toString().trim().split("\n")
// let [N, ...input] = ["7",
//     "pop",
//     "top",
//     "push 123",
//     "top",
//     "pop",
//     "top",
//     "pop"]
class Stack {
    // 빈배열 생성
    constructor(){
        this._arr = [];
    }
    // push X: 정수 X를 스택에 넣는 연산이다.
    push = (item) =>{
        this._arr.push(item);
    }
    // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    pop = () => {
        if(this._arr.length == 0) return -1
        return +this._arr.pop();
    }
    // size: 스택에 들어있는 정수의 개수를 출력한다.
    size = () => {
        return this._arr.length;
    }
    // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
    empty = () => {
        if(this._arr.length == 0) return 1
        return 0;
    }
    // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    top = () => {
        if(this._arr.length == 0) return -1
        return +this._arr[this._arr.length - 1]
    }
}
const stack = new Stack;
const result = [];
input.forEach(element => {
    const array = element.split(" ")
    switch (array[0]) {
        case "push":
            // console.log("push");
            return stack.push(array[1]);
        case "pop":
            // console.log("pop");
            return result.push(stack.pop());
        case "size":
            // console.log("size");
            return result.push(stack.size());
        case "empty":
            // console.log("empty");
            return result.push(stack.empty());
        case "top":
            // console.log("top");
            return result.push(stack.top());
        default:
            break;
    }
}); 
console.log(result.join("\n"));

