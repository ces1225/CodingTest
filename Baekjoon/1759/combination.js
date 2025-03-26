// DFS - 조합
const ar = ["a", "b", "c", "d", "e"];
const C = 2;
let output = [];
let arr = ar.sort();
const dfs = (candidate, index) => {
  if (candidate.length === C) {
    output.push(candidate);
  } else {
    for (let i = index; i < arr.length; i++) {
      dfs(candidate + arr[i], i + 1);
    }
  }
};
dfs("", 0);
console.log(output.join("\n"));
console.log(output.length);
