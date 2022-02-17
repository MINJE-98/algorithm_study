function solution(n, costs) {
  // 연결되어있는지 확인하는 테이블
  let table = new Array(n).fill(0).map((v, idx) => idx);
  costs = costs.sort((a, b) => a[2] - b[2]);
  let answer = 0;
  for (let cost of costs) {
    console.log(cost);
    // 모두 연결되었으면 반복문 종료
    if (isEnd(table)) break;
    // 섬끼리 연결이 되어있지 않은 경우.
    if (table[cost[1]] !== table[cost[0]]) {
      for (let i = 0; i < table.length; i++) {
        if (table[i] === table[cost[1]]) table[i] = table[cost[0]];
      }
      answer += cost[2];
    }
  }
  console.log(answer);
}

function isEnd(table) {
  for (let i = 1; i < table.length; i++) {
    if (table[i - 1] !== table[i]) return false;
  }
  return true;
}

const n = 5;
const costs = [
  [0, 1, 1],
  [3, 1, 1],
  [0, 2, 2],
  [0, 3, 2],
  [0, 4, 100],
];

solution(n, costs);
