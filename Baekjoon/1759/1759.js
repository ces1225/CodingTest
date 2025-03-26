const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "1759/input1759.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(/\r?\n/);

const [L, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(String);

let verb = ["a", "e", "i", "o", "u"];
const output = [];
arr.sort();

const dfs = (candidate, index) => {
  if (candidate.length === +L) {
    const verbCount = [...candidate].reduce(
      (acc, arr) => acc + verb.includes(arr),
      0
    );
    const consonantCount = L - verbCount;
    if (verbCount >= 1 && consonantCount >= 2) {
      output.push(candidate);
    }
  } else {
    for (let i = index; i < C; i++) {
      dfs(candidate + arr[i], i + 1);
    }
  }
};

dfs("", 0);
console.log(output.join("\n"));
