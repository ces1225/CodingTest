const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input11660.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const matrix = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const rangeSum = input.slice(N + 1).map((line) => line.split(" ").map(Number));

const prefixSum = new Array(N + 1)
  .fill(null)
  .map(() => new Array(N + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    prefixSum[i][j] =
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1] +
      matrix[i - 1][j - 1];
  }
}
console.log(prefixSum);
rangeSum.forEach((range) => {
  let [x1, y1, x2, y2] = range;
  let answer =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];
  console.log(answer);
});
