class Queue {
    constructor() {
        // 빈 배열 선언
        this._arr = [];
    }
    // 데이터를 넣어 준다.
    enqueue(item){
        this._arr.push(item);
    }
    // 먼저 넣은 데이터를 제거한다.
    dequeue() {
        return this._arr.shift();
    }
}