// (1 ≤ N ≤ 100,000) => O(NlonN)
// 1 초	256 MB



let [n, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");
let names = []

input = input
        .map(element =>  element.split(" ").map(v => Number(v)||v))
        .sort((a, b)=>{
            // 국어점수 오름차순
            if(a[1] < b[1])  return 1; else if(a[1] > b[1]) return -1;
            else {
                // 영어점수 내림차순
                if(a[2] > b[2]) return 1; else if(a[2] < b[2]) return -1;
                else {
                    // 수학점수 오름차순
                    if(a[3] < b[3]) return 1; else if (a[3] > b[3]) return -1;
                    else {
                        // 이름 내림차순
                        if(a[0] > b[0]) return 1; else if (a[0] < b[0]) return -1;
                    }
                }
            }
        })
input.forEach(element =>names.push(element[0]))
console.log(names.join("\n"));
