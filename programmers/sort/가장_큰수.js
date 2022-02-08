/**
 * 2022-02-06
 * 가장 큰수
 * 몰라서 검색해봤다...
 * 가장큰수는 sort함수를 사용하여 풀어야한다..
 * sort할때 a와 b의합과 b와 a의 합의 기준으로 푼다.
 */

function solution(numbers) {
  let strings = numbers.map((num) => num + '');
  const answer = strings.sort((a, b) => b + a - (a + b));
  return answer;
}

const numbers = [3, 30, 34, 5, 9];
solution(numbers);
