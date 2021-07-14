const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTH = {1: 31, 2: 28,  3: 31, 4:30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
const input = require('fs').readFileSync(0).toString().split(' ');

const input_month = parseInt(input[0]);
const input_day = parseInt(input[1]);

let count =0;
for(let i = 0; i < input_month -1; i++){
    count += MONTH[i + 1]
}
console.log(WEEK[ (count + input_day) % 7]);

