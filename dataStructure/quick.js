// quick

// 피벗값은 무조건 제일 왼쪽값이다.
// 원소가 1개인 경우
// 오른쪽으로 가면서 피벗값보다 큰값
// 왼쪽으로 가면서 피벗값보다 작은값
// 엇갈린값
// 안엇갈렸다면
 // 분할된 배열을 각각 퀵정렬로 재정렬을 합니다.
 function quick(array, left, right) {
    let i = left;
    let j = right
    let pivot = left;
    let tmp = null;
    // 원소가 1개인 경우
    // 가장 왼쪽에 있어야할 i가 j랑 같다면 원소가 1개이다.
    if (i >= j) {
            return array;
    }
    // 오른쪽으로 가면서 피벗값보다 큰값을 찾습니다.
    while (array[pivot] >= array[i]) {
        i++;
    }
    // 왼쪽으로 가면서 피벗값보다 작은값을 찾습니다.
    while (array[pivot] <= array[j] && pivot < j ) {
        j--;
    }
    if (i > j) {// 엇갈렸다면?
       tmp = array[j];
       array[j] = array[pivot];
       array[pivot] = tmp
    }else {// 안엇갈렸다면
        // 왼쪽값이랑 피벗값이랑 스왑을 합니다.
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    // 분할된 배열을 각각 퀵정렬로 정렬을 합니다.
    
    quick(array, left, j -1);
    quick(array, i, right);
    // 다 정렬된 배열을 반환합니다.
    return array;
}
const data = [5,3,8,6,1,2,4];
const result = quick(data, 0, data.length -1)
console.log(result);