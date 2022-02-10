/**
 * 2022-02-10
 * 소수 찾기
 * 이문제는 순열, 소수 둘다 알아야 풀수있다.. 이문제를 통해 순열과 조합을 다시 공부하게 됨..
 */
function solution(numbers) {
  let result = [];
  let answer = 0;
  // 배열로 바꾸기
  numbers = numbers.split('');
  // 순열로 모든 경우의수 구하기. 1~ numers의 길이까지
  for (let i = 1; i <= numbers.length; i++) {
    const permutations = getPermutations(numbers, i);
    result.push(...permutations);
  }
  // int형으로 바꾸고 중복 제거하기
  result = result.map((v) => +v.join(''));
  result = new Set(result);
  result = [...result];
  // 소수 판별하기
  for (let i = 0; i < result.length; i++) {
    const isprime = primeNumber(result[i]);
    if (isprime) answer += 1;
  }
  return answer;
}

function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}
function primeNumber(data) {
  if (data === 1) return false;
  if (data % 2 === 0) return data === 2 ? true : false;
  const sqrt = parseInt(Math.sqrt(data));
  for (let i = 3; i <= sqrt; i += 2) {
    if (data % i === 0) return false;
  }
  return true;
}
