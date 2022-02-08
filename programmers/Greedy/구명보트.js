/**
 * 2022-02-08
 * 구명보트
 * **아이디어
 * 먼저 정렬을 하게되면
 *  가장앞에 가벼운 사람, 가장뒤에 무거운 사람으로 배치한다.
 * 그리고 가장앞과 뒷사람의 무게를 합치고 구명보트의 리미트값과 비교한다.
 * 둘이 합쳐서 리미트보다 작으면 같이 배열에서 빼고 answer 1추가
 * 둘이 합쳐서 리미트보다 크면 큰사람만 리턴해준다.
 */
function solution(people, limit) {
  // 정답
  let answer = 0;
  // 정렬을 합니다.
  people = people.sort((a, b) => a - b);
  // 무인도에 사람이 없을때까지 반복합니다.
  while (people.length != 0) {
    const first = people[0];
    const last = people[people.length - 1];
    // 가장앞의 값과 가장 뒤의 값을 더한값이 limit보다 작거나 같으면 answer +1 후 두값 제거
    if (first + last <= limit) {
      answer += 1;
      people.shift();
      people.pop();
    } else {
      answer += 1;
      people.pop();
    }
  }
  return answer;
}
