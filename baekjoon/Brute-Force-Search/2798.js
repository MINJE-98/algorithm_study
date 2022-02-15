/**
 * 2022-02-15
 * 블랙잭
 * 순열로 풀수있음.
 */
let [rule, cardList] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
// let [rule, cardList] = ['5 21', '5 6 7 8 9'];
let [n, m] = rule.split(' ');
cardList = cardList.split(' ').map((v) => +v);

const result = combination(cardList, 3)
  .map((v) => v.reduce((a, b) => a + b))
  .filter((v) => v <= m)
  .sort((a, b) => b - a);
console.log(result[0]);

function combination(cardList, selectNumber) {
  const results = [];
  if (selectNumber === 1) return cardList.map((v) => [v]);

  cardList.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}
