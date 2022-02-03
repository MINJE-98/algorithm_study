function insertSort(input){
    console.log("start");
    // 입력값의 길이를 저장
    const len = input.length;
    let tmp = null;
    // 입력값의 길이만큼 반복
    for(i = 0; i < len; i++){
        console.log(i);
        let j = i;
        while(input[j] > input[j + 1]) {
            console.log(input[j] + ' > ' + input[j + 1]);
            tmp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = tmp;
            console.log(input);
            j--;
        }
    }
    console.log(input)
}
let data = [3,2,1]
insertSort(data)
