function selectionSort (input) {
    // 입력값의 길이를 저장
    const len = input.length;
    let tmp = null;
    // 입력값의 길이만큼 반복
    for(let i = 0; i < len; i++){
        // 0번째 숫자부터 하나씩 비교하여 서로 위치를 변경한다.
      for (let j = 0; j < len; j++) {
          console.log(i, j);
        if (input[i] < input[j]) {
            console.log(`${input[i]} < ${input[j]}`);
          tmp = input[j];
          input[j] = input[i];
          input[i] = tmp;
          tmp = null;
          console.log(input);
        }
      }
    }
    return input;
  }
  input = [7,3,9,5,1,2,4]
  const a = selectionSort(input);
  console.log(a);
