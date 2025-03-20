const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '1759 암호 만들기/input1759.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split(/\r?\n/);

const [L, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(String);

let verb = ["a", "e", "i", "o", "u"];
arr.sort();

const dfs = ()