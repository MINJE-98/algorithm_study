/**
 * 2022-02-06
 * 가장 큰수
 * 몰라서 검색해봤다...
 */
function solution(numbers, target) {
  const answer = dfs(numbers, target, 0);
  console.log(answer);
}
// dfs numbers
function dfs(numbers, target, depth) {
  console.log(numbers, target, depth);
  let answer = 0;
  if (numbers.length === depth) {
    const sum = numbers.reduce((a, b) => a + b);
    return sum === target ? 1 : 0;
  } else {
    numbers[depth] *= -1;
    // 바뀐-1을 변경하여 비교
    answer += dfs(numbers, target, depth + 1);
    return answer;
  }
}
const numbers = [1, 1, 1, 1, 1];
const target = 3;
solution(numbers, target);
