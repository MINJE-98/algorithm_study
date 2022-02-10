/**
 * 2022-02-10
 * 카펫
 * 사각형의 넓이 = brown + yellow
 * 위의 사각형이 나오는 경우의 수 모두 찾고
 * 해당하는 사각형의 yellow수를 찾으면 된다.
 */
function solution(brown, yellow) {
  const sum = brown + yellow;
  const sqrt = parseInt(Math.sqrt(sum));
  let answer = [];
  // 모든 경우의수 찾기
  for (let i = 1; i <= sqrt; i++) {
    if (sum % i === 0) {
      // yellow = height - 2 * width - 2
      if ((sum / i - 2) * (i - 2) === yellow) {
        answer.push(sum / i, i);
        break;
      }
    }
  }
  return answer;
}
