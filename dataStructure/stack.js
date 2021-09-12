class Stack {
    constructor() {
        // 빈 배열을 생성한다.
        this._arr = [];
    }
    // 스택에 데이터를 추가한다.
    push(item) {
        this._arr.push(item);
    }
    // 가장 마지막에 넣은 데이터를 삭제한다.
    pop() {
        return this._arr.pop();
    }
    // 가장 마지막에 넣은 데이터를 반환한다.
    peek() {
        return this._arr[this._arr.length -1];
    }
}

const stack = new Stack;
stack.push(1);
stack.push(2);
console.log(stack.peek());