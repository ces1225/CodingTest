const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '1654 랜선 자르기/input1654.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split(/\r?\n/);

const [K, N] = input[0].split(" ").map(Number);
const arr = input.slice(1, K + 1).map(Number);

let lanCable = arr.sort((a, b) => a - b);
let start = 1;
let end = Math.max(...lanCable);
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let quantity = lanCable.reduce((prev, curr) => prev + Math.floor(curr / mid), 0);

    if (quantity >= N) {
        start = mid + 1
        answer = mid;
    } else {
        end = mid - 1
    }
}
console.log(answer)