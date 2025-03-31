const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input11659.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const queries = input.slice(2).map((line) => line.split(" ").map(Number));

const prefixSum = Array.from({ length: N + 1 }).fill(0);

arr.forEach((value, index) => {
  prefixSum[index + 1] = prefixSum[index] + value;
});

for (let que of queries) {
  let answer = 0;
  const [i, j] = que;
  answer += prefixSum[j] - prefixSum[i - 1];
  console.log(answer);
}
