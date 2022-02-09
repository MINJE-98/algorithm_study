/**
 * 2022-02-09
 * 큰수만들기
 * 30분 동안 생각나지 않으면 구글 검색 룰을 지켜.. 검색해봤다.
 * 이문제는 스택을 사용하여 푸는 문제이다.
 * -> stack에 가장 최근값이 넣으려는 값보다 작으면 빼줍니다.(크거나 같을때까지 뺀다.)
 * 위의 문장이 핵심이다.
 */
function solution(number, k) {
  const answer = [];
  number = number.split('');
  // 전부 같은 값인지 검증

  for (let i in number) {
    // stack에 가장 최근값이 넣으려는 값보다 작으면 빼줍니다.(크거나 같을때까지 뺀다.)
    while (k != 0 && answer[answer.length - 1] < number[i]) {
      answer.pop();
      k -= 1;
    }
    // number[i]의 값을 스택에 넣어준다.
    answer.push(number[i]);
  }
  // 테스트케이스 12번때문에 추가.
  // 위 for문에서 k가 0이 아닌 경우로 끝날경우 뒷자리부터 다날림.
  while (k != 0) {
    answer.pop();
    k -= 1;
  }
  return answer.join('');
}
