const fs = require('fs');
const input = fs.readFileSync('2805 나무 자르기/input2805.txt', "utf8").trim().split(/\r?\n/);

let index = 0;
const [N, M] = input[index++].split(" ").map(Number);
const numbers = input[index++].split(" ").map(Number);

let start = 0;
let end = Math.max(...numbers);
let answer = 0;

while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    let wood = numbers.reduce((prev, curr) => prev + Math.max(0, curr - mid), 0);

    if (M <= wood) {
        answer = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(answer); 
