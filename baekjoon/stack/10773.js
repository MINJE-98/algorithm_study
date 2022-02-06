/**
 * 2022-02-05
 * BAEKJOON 10773
 * 단순히 스택에 값을 넣고 빼는 정도의 난이도
 * n이 0일 경우도 생각해야함.
 */
let fs = require('fs');
let n = 10
let input =[1,3,5,4,0,0,7,0,0,6]
const stack = [0]; 
let i = 0;
for(let i = 0; i < n; i++) {
  if(input[i] === 0) stack.pop();
  else stack.push(input[i]);
}
const answer =  stack.reduce((a, c)=> a+c)
console.log(answer)
