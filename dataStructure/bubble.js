function bubblesort(input) {
    console.log("start");
    // 입력값의 길이를 저장
    const len = input.length;
    let tmp = null;
    // 입력값의 길이만큼 반복

    for(let i = 0; i < len; i++){
        // 0번째 숫자부터 하나씩 비교하여 서로 위치를 변경한다.
        console.log(i);
        for(let j = 0; j < len - i; j++){
            if(input[j] > input[j + 1]) {
                console.log(`${input[j]} > ${input[j + 1]}`);
                tmp = input[j];

                input[j] = input[j + 1];
                input[j + 1] = tmp;
                tmp = null
                console.log(input);
            }
        }
    }
    return input
}
let data = [1,2,3]
const a = bubblesort(data);
console.log(a);